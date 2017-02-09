import React from 'react';
import ReactDOM from 'react-dom';

class Player extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            style: {
                  
                  flexBasis:"0%"
            },
            videoLength: "00:00",
            currentTime: "00:00"
        };
        this.togglePlay = this.togglePlay.bind(this);
        this.handleProgress = this.handleProgress.bind(this);
        this.scrub = this.scrub.bind(this);
        this.showDuration = this.showDuration.bind(this);               
    }
    
    rewind(val){       
        this._player.currentTime += val;
    }
    togglePlay(){     
        let isPlaying = this.state.isPlaying;        
        if(!isPlaying){
            this._player.play();
        } else {
            this._player.pause();
        }
        this.setState({
           isPlaying: !isPlaying 
        });
    }
    handleProgress(){
        const percent = (this._player.currentTime/this._player.duration)*100;       
        const currentTime = this.timeToVideoTime(this._player.currentTime);
        
        this.setState({
           currentTime,
           style: {              
                flexBasis:`${percent}%`
            }
        });
    }
    
    scrub(e){
        const scrubTime = (e.nativeEvent.offsetX/this._progress.offsetWidth) * this._player.duration;
        this._player.currentTime = scrubTime;
    }
    showDuration(){
        const videoLength = this.timeToVideoTime(this._player.duration);
        const currentTime = this.timeToVideoTime(this._player.currentTime);        
      
        this.setState({
            videoLength,
            currentTime
        });
    }
    timeToVideoTime(time){
        const mins = Math.floor(time/60);           
        const minsToStr = mins < 10 ? "0"+mins : mins;
        const sec = Math.floor(time - mins*60);
        const secToStr = sec < 10 ? "0"+sec : sec;
        const videoTime = `${minsToStr}:${secToStr}`;
        return videoTime;
    }
    toggleFullScreen() {        
      var elem = this._player;
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen();
        }
    }
    render(){
        const playButton = this.state.isPlaying ? "Pause" : "Play";
        
        const src = this.props.src;
        const name = this.props.name;
       
        return(
            <div>             
                <h4>{name}</h4>
                <div className="video-obj">
                    <video className="player"
                           onLoadedMetadata={this.showDuration}
                           ref={(player) => { this._player = player; }}
                           src={src}
                           type="video/mp4"                       
                           onClick={this.togglePlay}
                           onTimeUpdate={this.handleProgress}>
                    </video>
                    <div>
                        <div 
                            onClick={this.scrub}
                            ref={(progress) => { this._progress = progress; }}
                            className="progress">
                            <div className="progress_filled"                                 
                                 style = {this.state.style}
                                 ref={(progressBar) => { this._progressBar = progressBar; }}>
                            </div>
                        </div>
                        <button onClick={this.togglePlay}>{playButton}</button>
                        
                        <span className="time">
                        <span >{this.state.currentTime}</span> || <span>{this.state.videoLength}</span>           
                        </span>
                        
                        <button className="full-screen pull-right" onClick={()=>this.toggleFullScreen()}>FullScreen</button>
                        <span className="time pull-right">
                            <button onClick={()=>this.rewind(-1)}>&laquo;</button>
                            <button onClick={()=>this.rewind(1)}>&raquo;</button>                       
                        </span>
                    </div>
                </div>
                <button className="back-btn btn-lg" onClick={()=>{this.props.handleClick("","")}}>Back</button>
            </div>
        );
    }
}

export default Player;


