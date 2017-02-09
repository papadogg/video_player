import React from 'react';


class VideoItem extends React.Component{
    render(){
       
        const src = this.props.src;           
        const fileName = this.props.name;           
        
        return(
            
            <div className="row video-item" onClick={()=>{this.props.handleClick(src, fileName)}}>            
                <div className="col-sm-7">
                    <video src={this.props.src} width="100%" height="auto"></video>
                </div>
                <div className="col-sm-5">
                    <p className="file-name">{fileName}</p>
                </div>            
            </div>  
            

        );     
    }
}

export default VideoItem;