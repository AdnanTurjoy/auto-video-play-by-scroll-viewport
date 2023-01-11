import React, { useEffect, useRef, useState } from "react";
import "./Video.css";

import useElementOnScreen from '../hooks/useElementOnScreen'

const Video = ({ url }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  }
  const isVisibile = useElementOnScreen(options, videoRef)
  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(!playing);
    } else {
      videoRef.current.play();
      setPlaying(!playing);
    }
  };
  useEffect(() => {
    if (isVisibile) {
      if (!playing) {        
        videoRef.current.play();
        setPlaying(true)
      }
    }
    else {
      if (playing) {        
        videoRef.current.pause();
        setPlaying(false)
      }
    }
  }, [isVisibile])


  return (
    <div className="video">
      <video className="video_player" loop preload="true" ref={videoRef} onClick={onVideoClick} src={url}></video>
      {/* {!playing && <VideoPlayButton onVideoClick={onVideoClick} />} */}
    </div>
  );
};
export default Video;