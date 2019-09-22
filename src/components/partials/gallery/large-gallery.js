import React, { Component, Fragment } from 'react';
import GalleryImage from "./gallery-image.js";
import importAll from './../../../lib/fileHelper';

class LargeGallery extends Component {
    constructor (props) {
        super (props);

        this.state = {
            reduxImages: importAll(require.context('./mhp3rd/redux', false, /\.(png|jpe?g|svg)$/)),
            oldImages: importAll(require.context('./mhp3rd/old', false, /\.(png|jpe?g|svg)$/))
        }
    }

    renderAllImages = () => {

        return this.state.reduxImages.map( (img, index) => {
           return ( <GalleryImage 
                        key = { index } 
                        reduxImage = { img[1] } 
                        oldImage = { this.state.oldImages[index][1] } 
                    /> )
        });

    }

    render () {
        return (
           <div className = "gallery">
               { this.renderAllImages() }
           </div>
        )
    }
}

export default LargeGallery;