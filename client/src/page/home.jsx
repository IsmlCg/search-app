import "./../assets/styles/App.css";
import SearchBox from "../components/SearchBox/SearchBox";
import Header from "../components/header/Header";
import data from "../assets/json/data.json";
import SuggestionList from "../components/SuggestionList/SuggestionList";
import { useState } from "react";

/**
 * Home component
 *
 * This component is the main entry point of the application.
 * It renders the Header, SearchBox, and SuggestionList components.
 *
 * @returns {JSX.Element} The Home component.
 */
export default function Home() {
  // State to hold filtered data
  const [filteredData, setFilteredData] = useState([]);

  /**
   * Handle Enter key event from SearchBox
   *
   * This function is called when the Enter key is pressed in the SearchBox.
   * It updates the filteredData state with the provided value.
   *
   * @param {Array} val - The filtered data to set.
   */
  const handleEnter = (val) => {
    setFilteredData(val);
  };

  /**
   * Clear and prepare data
   *
   * This function processes the data from the JSON file and
   * formats it into a flat array of song objects with additional information.
   *
   * @returns {Array} An array of formatted song objects.
   */
  const clearData = () => {
    let results = [];

    // Iterate through each artist in the data
    data.forEach((artist) => {
      // Iterate through each album of the artist
      artist.albums.forEach((album) => {
        // Iterate through each song of the album
        album.songs.forEach((song) => {
          // Create an object with artist, album, and song details
          const values = {
            artist: artist.name,
            album: album.title,
            song: song.title,
            length: song.length,
            description: album.description,
            text: `${artist.name} ${album.title} ${song.title}`,
          };
          // Add the object to the results array
          results.push(values);
        });
      });
    });

    return results;
  };

  return (
    <>
      {/* Render the Header component with the SearchBox as a child */}
      <Header>
        <SearchBox onEnter={handleEnter} data={clearData()} />
      </Header>

      {/* Render the SuggestionList component with the filtered data */}
      <SuggestionList data={filteredData} />
    </>
  );
}
