import React from "react";

const VideoPlayer = ({ videos }) => {
  const getYoutubeVideoId = (url) => {
    // Split the URL by '?' and get the second part which has parameters
    const params = url.split("?")[1];

    // Split parameters by '&' and find the one that starts with 'v=' (video id)
    const videoIdParam = params
      .split("&")
      .find((param) => param.startsWith("v="));

    // If 'v=' parameter found, return the substring after 'v='
    if (videoIdParam) {
      return videoIdParam.split("v=")[1];
    }

    // If no valid video ID found, return null or handle error as needed
    return null;
  };

  return (
    <>
      {videos.slice(0, 6).map((val, index) => (
        <div className="col-span-1 pt-8 pb-8">
          <iframe
            key={index}
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(val.link)}`}
            title="YouTube Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          Views: {val.views.toLocaleString()}
          <br></br>
          Length: {val.length}
        </div>
      ))}
    </>
  );
};

export default VideoPlayer;
