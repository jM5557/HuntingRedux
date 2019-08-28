import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Images from './images';

import ImageModal from './../image-modal/image-modal'

class Gallery extends Component {
    
    constructor(props) {
        super(props);
        this.state = {  }
    }

    renderModal = (img_a, img_b) => {
        if (document.getElementById('gallery_root'))
            document.body.removeChild(document.getElementById('gallery_root'));

        let img_modal_div = document.createElement('div');
        img_modal_div.id = 'gallery_root';

        document.body.appendChild(img_modal_div);

        let img = { a: img_a, b: img_b };
        console.log(img);

        ReactDOM.render(<ImageModal  
            img = { img }
            imgPath = { Images.imagePath }
        />, document.getElementById('gallery_root'));
    }

    render() { 

        let arr_a = [], arr_b = [];
        
        let render_gallery = Images.images.filter( (img, i) => {

            // Pre-fills two arrays, one for REDUX images
            // and one for OLD Images
            if (img.src.indexOf('_a') !== -1) {

                arr_a.push(img.src);

            } else if (img.src.indexOf('_b') !== -1) {

                arr_b.push(img.src);

            }

            return img.src.indexOf('_b') === -1;
        } ).map( (img, i) => {
            return (
                <img 
                    key = { i } 
                    alt = "gallery" 
                    src = { Images.imagePath + img.src } 
                    onClick = { this.renderModal.bind(this, arr_a[i], arr_b[i]) }
                />
            );
        });

        return ( 
            <div className = "gallery">
                { render_gallery }
            </div>
         );
    }
}

export default Gallery;