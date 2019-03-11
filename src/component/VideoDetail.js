import React from 'react';


const VideoDetail = ({ video }) =>{
    
    if(!video){
        return <div>Loading</div>;
    }
    const videoString = `https://youtube.com/embed/${video.id.videoId}`;
    return (
        <div className = 'ui segmant'>
         <div className = 'ui embed'>
          <iframe title = 'Video Player' src = {videoString} />
         </div>
         <div className= 'current-content'>
            <h4 className = 'title'>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
         </div>
        </div>
  
    )}

export default VideoDetail;