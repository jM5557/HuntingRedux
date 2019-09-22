import React, { Component } from 'react';

class VideoModal extends Component {

    constructor (props) {
        super(props);

        this.state = {

        }
    }

    closeModal = () => {
        document.body.removeChild(document.getElementById('video_root'));
    }

    render() { 
        return ( 
            <div className = "modal">

                <div className = "overlay" onClick = { this.closeModal }></div>

                <button className = "close-btn" onClick = { this.closeModal } >&times;</button>

                <div className = "video-iframe-wrapper">
                    <div className = "video-iframe-scaler">
                        <iframe src={ "https://www.youtube.com/embed/" + this.props.video.id } frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                        </iframe>
                    </div>
                </div>

            </div>
         );
    }
}
 
export default VideoModal;