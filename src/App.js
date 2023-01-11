import React, { useState } from 'react';
import './App.css';
import Video from './components/Video'
import video1 from "./video1.mp4"
import video2 from "./video2.mp4"
import video3 from "./video3.mp4"
const videoDemoData=[
  {
    url: video1,
   
  },
  {
    url:video2,
 
  },
  {
    url: video3,
   
  },
]
function App() {
  const [videos ] = useState(videoDemoData)
  return (
    <div className="app">
      <div className="app_videos">
        {videos.map(({ url }) =>
          <Video key={url} url={url} />)}
      </div>
    </div>
  );
}

export default App;
