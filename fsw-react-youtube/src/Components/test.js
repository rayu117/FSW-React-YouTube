import React from "react";
import { useState } from "react";
import axios from "axios"
import { Link, Route } from "react-router-dom"
import VideoCard from "./VideoCard";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [vids, setVideo] = useState([]);
  

  const inputChange = (e) => { setInput(e.target.value) 
      };

      

  

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("handleSubmit")
    const { data } = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?q=${input}&type=video&part=snippet&key=${process.env.REACT_APP_API_KEY}`)
    console.log(data)
    setVideo(data);
    setInput("");
    };
  return (
    <>
    <form onSubmit={handleSubmit} >
      <input
        onChange={inputChange}
        value={input}
        type="text"
        placeholder="Search..."
      />
      <button>Search</button>
    </form>

<ul className="List">
{vids.map((video) => (
  <Link className="Link" to={`/videos/${video.id.videoId}`}>
    <li key={video.id.videoId}>
      <img
        alt="youtube vid"
        className="thumbnails"
        src={video.snippet.thumbnails.high.url}
      />
      <h3>{video.snippet.title}</h3>
      <div>
        <Route exact path='/'>
          <VideoCard/>
        </Route>
      </div>
    </li>
  </Link>
))}
</ul>
{/* <VideoCard vid={video.id.videoId} /> */}
</>
  );
}