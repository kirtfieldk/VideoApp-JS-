import React from 'react';
import '../CSS/VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) =>{
    return (
    <div>
        <div onClick = { () => onVideoSelect(video)} className = 'video-item item'>
            <img alt = "Video to be played" className = 'ui image' src = {video.snippet.thumbnails.medium.url} />
            <div className = 'content'>
                <div className = 'header'>{video.snippet.title}</div>
            </div> 
        </div>
    </div>
    )}
export default VideoItem;