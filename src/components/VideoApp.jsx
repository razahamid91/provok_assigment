// src/components/VideoApp.js
import React, { useState } from 'react';
import axios from 'axios';
import './VideoApp.css';
import VideoPlayer from './VideoPlayer';

const VideoApp = () => {
  const [videoName, setVideoName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchVideos = async () => {
    try {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(
        videoName
      )}&key=AIzaSyBtII9yFrT-ueNxgZlD9Tjej9uDP9OK3Y8&part=snippet&type=video`
    );

      setSearchResults(response.data.items);
    } catch (error) {
      console.error('Error searching videos:', error);
    }
  };

  const selectVideo = (videoId) => {
    setVideoName('');
    setSearchResults([]);
    setVideoId(videoId);
  };

  const renderSearchResults = () => {
    return (
      <ul>
        {searchResults.map((result) => (
          <li key={result.id.videoId} onClick={() => selectVideo(result.id.videoId)}>
            {result.snippet.title}
          </li>
        ))}
      </ul>
    );
  };

  const [videoId, setVideoId] = useState('');

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="videoName">Search for YouTube Video:</label>
        <input
          type="text"
          id="videoName"
          placeholder="Enter video name"
          value={videoName}
          onChange={(e) => setVideoName(e.target.value)}
        />
        <button onClick={searchVideos}>Search</button>
      </div>
      {searchResults.length > 0 && renderSearchResults()}
      {videoId && <VideoPlayer videoId={videoId} />}
    </div>
  );
};

export default VideoApp;
