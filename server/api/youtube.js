const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
/**
 * This API endpoint allows users to search for YouTube videos based on a query string.
 * It uses the SerpAPI service to fetch the search results and returns them as a JSON response.
 * @search_query (string, required): The search term to query on YouTube.
 * @engine The search engine to use. For YouTube, this should be youtube.
 */
app.get("/api/youtube", async (req, res) => {
  // Destructure search_query and engine from the request query parameters
  const { search_query, engine } = req.query;
  try {
    // Define your API key
    const api_key =
      "e84d9a428f650b3a50d107f5af9c1a2df84cada3296dcab6fd1ba2c6f24e6fd1";

    // Construct the API URL with the query parameters
    const apiUrl = `https://serpapi.com/search.json?search_query=${search_query}&engine=${engine}&api_key=${api_key}`;

    // Make a GET request to the external API
    const response = await axios.get(apiUrl);

    // Send the video results as a JSON response
    res.json(response.data.video_results); // Send the response data as JSON
  } catch (error) {
    console.error("Error fetching data from external API:", error);
    // Send a 500 status code with a "Server Error" message
    res.status(500).send("Server Error");
  }
});

// Define the port to listen on, default to 5000 if not specified in environment variables
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
