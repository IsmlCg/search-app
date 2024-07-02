import Player from "../UI/Player";
/**
 * Example usage:
 * ```jsx
 * <SuggestionList>
 *   <p>Your content here</p>
 * </SuggestionList>
 * @param {Array} data - The initial data to be filtered.
 *
 */
export default function SuggestionList({ data }) {
  return (
    <div className="py-8 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Filter Your Data Effortlessly
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Use our advanced search box to quickly filter through your data and
            find exactly what you need in no time.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl  grid-cols-1 gap-8 sm:mt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/*
           print the filtered data that comes from the searchBox component.
           */}
          {data.map((values, index) => (
            // Print the data filters to the player.
            <Player data={values} track={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
