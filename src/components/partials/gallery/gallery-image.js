import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import ComparisonModal from './../modal/comparison-modal';

class GalleryImage extends Component {
    constructor (props) {
        super(props);
    }

    renderModal = () => {
        if (document.getElementById('gallery_root'))
            document.body.removeChild(document.getElementById('gallery_root'));

        let modalWrapper = document.createElement('div');
        modalWrapper.id = 'gallery_root';

        document.body.appendChild(modalWrapper);

        ReactDOM.render(<ComparisonModal  
            reduxImage = { this.props.reduxImage }
            oldImage = { this.props.oldImage }
        />, document.getElementById('gallery_root'));
    }

    render () {
        return (
            <Fragment>
                <img 
                    src = { this.props.reduxImage } 
                    className = "gallery-thumbnail"
                    onClick = { this.renderModal }
                />
            </Fragment>
        );
    }
}

export default GalleryImage;