import React from 'react';

import VideoList from './VideoList';
import Player from './Player';


const videoArray = [
    {
        file: "video/video1.mp4",
        name: "first video"
    },
    {
        file: "video/video2.mp4",
        name: "second video"
    },
    {
        file: "video/video3.mp4",
        name: "third video"
    }, 
    {
        file: "video/video4.mp4",
        name: "fourth video"
    },
    {
        file: "video/video5.mp4",
        name: "fifth video"
    }                    
];

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            currentVideo: {
                src: "",
                name: ""
            }
        }
        this.handleClick = this.handleClick.bind(this);
        this.renderView = this.renderView.bind(this);
    }
    handleClick(src,fileName){        
        this.setState({
            currentVideo: {
                src,
                name: fileName
            }
        })
    }
    renderView(){
        if(this.state.currentVideo.src){
            return <Player src={this.state.currentVideo.src} name={this.state.currentVideo.name} handleClick={this.handleClick}/>
        } else {
            return <VideoList videos={videoArray} handleClick={this.handleClick}/>
        }
    }
    render(){
        return(
            <div>
                {this.renderView()}
            </div>
        );     
    }
}

export default Main;