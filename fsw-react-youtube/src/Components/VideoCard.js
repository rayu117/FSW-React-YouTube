import React from "react";
import { Link } from "react-router-dom";

const VideoCard = () => {
  return (
    <>
      <Link className="Link" to={`/videos/${video.id.videoId}`}>
        <li key={video.id.videoId}>
          <img
            alt="youtube vid"
            className="thumbnails"
            src={video.snippet.thumbnails.high.url}
          />
          <h3>{video.snippet.title}</h3>
        </li>
      </Link>
    </>
  );
};
export default VideoCard;
