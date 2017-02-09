import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{
    render(){
        return(
            <div>
                <h4>List of videos</h4>
                <ul>
                    {this.props.videos.map(video => <VideoItem key={video.name} src={video.file} name={video.name} handleClick={this.props.handleClick}/>)}                                                 
                </ul>
            </div>
        );     
    }
}

export default VideoList;