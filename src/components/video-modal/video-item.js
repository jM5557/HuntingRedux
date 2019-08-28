import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import VideoModal from './video-modal';

class VideoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    displayVideoModal = () => {
        if ( document.getElementById('video') )
            document.body.removeChild(document.getElementById('video_root'));
        
        let d = document.createElement('div');
        d.id = 'video_root';

        document.body.appendChild(d);

        ReactDOM.render(<VideoModal 
            video = { this.props.video }
        />, document.getElementById('video_root'));
    }

    renderCategories = (categories) => {
        return categories.map( (category) => {
            return (
                <span className = "category">
                    { category.text }
                </span>
            );
        })
    }

    render() { 
        return ( 
            <div class = "video-thumbnail">
                <img 
                    alt = "video thumbnail" 
                    src = { "http://img.youtube.com/vi/" + this.props.video.id + "/0.jpg" } 
                    onClick = { this.displayVideoModal }
                />
                <p className = "title">{ this.props.video.title }</p>
                <div className = "category-list">
                    { this.renderCategories(this.props.categories) }
                </div>
            </div>
         );
    }
}
 
export default VideoItem;