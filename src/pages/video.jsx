import React from 'react';
import video from '../videos/genshin-impact-background.mp4'

const Video = () => {
    return (
        <div style={{marginTop: '40px'}}>
            <video  src={video} type='video/mp4' width='1280px' height='720px' muted autoPlay loop />
        </div>
    );
}

export default Video;
