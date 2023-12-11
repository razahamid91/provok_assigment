
import React from 'react';
import VideoApp from './components/VideoApp';
import './App.css';

function App() {
  return (
    <div className="AppContent">
      <header className="App-header">
        <h1>YouTube Video Player</h1>
        <VideoApp />
      </header>
    </div>
  );
}

export default App;
