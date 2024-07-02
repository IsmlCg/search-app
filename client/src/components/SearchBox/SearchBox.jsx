import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
/**
 * A component that manages an input field with optional dropdown options.
 *
 * State:
 * - showOptions: Boolean to control the visibility of options.
 * - inputValue: String for the current value of the input field.
 * - filteredData: Array containing the filtered data based on inputValue.
 *
 * Handlers:
 * - handleKeyDown: If 'Enter' key is pressed, triggers onEnter with the filtered data and hides options.
 * - handleChange: Updates inputValue and toggles showOptions based on input length.
 * - handleOptionClick: Sets the selected option's text as the input value, hides options, and triggers onEnter with the selected option.
 *
 * Effects:
 * - Filters data based on the current input value whenever inputValue or data changes.
 *
 * Example usage:
 * ```jsx
 * <SearchBox>
 *   <p>Your content here</p>
 * </SearchBox>
 *
 * @param {Array} data - The initial data to be filtered.
 * @param {Function} onEnter - Function to be called with filtered data when 'Enter' key is pressed.
 * @returns {JSX.Element} The Header component.
 */
export default function SearchBox({ onEnter, data }) {
  // This variable is to show the filtered list
  const [showOptions, setShowOptions] = useState(false);
  // This variable is to store the query in the filtered list
  const [inputValue, setInputValue] = useState("");
  // this variable is to store the filtered list
  const [filteredData, setFilteredData] = useState(data);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      // here it return the filtered data when they press the enter keyboard
      onEnter(filteredData);
      // Hides the track of the leaked data.
      setShowOptions(false);
    }
  };

  const handleChange = (event) => {
    // store search bos data
    setInputValue(event.target.value);
    if (event.target.value.length > 0) {
      // shows the track of the leaked data.
      setShowOptions(true);
    } else {
      // Hides the track of the leaked data.
      setShowOptions(false);
    }
  };

  useEffect(() => {
    /**
     * Filters the data based on the input value.
     *
     * The filterData function filters the data array to include only those options
     * whose text includes the current input value (case insensitive).
     */
    const filterData = () => {
      const filtered = data.filter((option) =>
        option.text.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(filtered);
    };

    filterData();
  }, [inputValue, data]);

  /**
   * Handles the click event on an option.
   *
   * When an option is clicked, this function sets the input value to the option's text,
   * hides the dropdown options, and triggers the onEnter function with the selected option.
   *
   * @param {Object} option - The selected option object.
   */
  const handleOptionClick = (option) => {
    setShowOptions(false);
    setInputValue(option.text);
    onEnter([option]);
  };

  return (
    <div className="w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-sky-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-300 sm:text-sm sm:leading-6"
          placeholder="Search"
          type="search"
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          value={inputValue}
        />
        {showOptions && filteredData.length > 0 ? (
          /**
           * Renders a dropdown list of filtered options.
           *
           * The dropdown list is shown if showOptions is true and there are filteredData options to display.
           * Each option is rendered as a list item and calls handleOptionClick on click.
           */
          <ul className="absolute z-10 bg-white border rounded-b-md mt-1 w-full">
            {filteredData.map((option, index) => (
              <li
                key={index}
                className="cursor-pointer py-1 px-3 hover:bg-blue-100"
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        ) : (
          showOptions && (
            /**
             * Renders a "No data found" message.
             *
             */
            <ul className="absolute z-10 bg-white border rounded-b-md mt-1 w-full">
              <li
                key="no-data"
                className="cursor-pointer py-1 px-3 hover:bg-blue-100"
              >
                No data found.
              </li>
            </ul>
          )
        )}
      </div>
    </div>
  );
}
