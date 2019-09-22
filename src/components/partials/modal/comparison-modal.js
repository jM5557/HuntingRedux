import React, { Component } from 'react';

class ComparisonModal extends Component {

    constructor (props) {
        super(props);

        this.state = {

            view_mode: 'REDUX',
            selected_img: props.reduxImage,

            layout:  {
                mode: 'SIDE_BY_SIDE',
                btn_text: 'View Fullscreen'
            },
        }
    }

    setViewMode = (view_mode) => {
        let s_i = this.state.selected_img;

        switch (view_mode) {
            case 'REDUX':
                s_i = this.props.reduxImage      
                break;
            case 'ORIGINAL':
                s_i = this.props.oldImage
                break;
            default:
                s_i = this.props.reduxImage
                break;
        }

        this.setState({
            view_mode: view_mode,
            selected_img: s_i
        });
    }

    toggleLayout = () => {
        let l = this.state.layout;

        switch (this.state.layout.mode) {
            case 'SIDE_BY_SIDE':
                this.setState({
                    layout: {
                        mode: 'SINGLE',
                        btn_text: 'View Side by Side'
                    },
                    view_mode: 'REDUX',
                    selected_img: this.props.reduxImage
                });
                break;
            default:
                this.setState({
                    layout: {
                        mode: 'SIDE_BY_SIDE',
                        btn_text: 'View Fullscreen'
                    }
                })
                break;
        }
    }

    renderWithLayout = () => {
        switch (this.state.layout.mode) {
            case 'SINGLE':
                return (
                    <img alt = "full screenshot" src = { this.state.selected_img } />
                );
            case 'SIDE_BY_SIDE':
                return (
                    <div className = "side-by-side">
                        <img alt = "before" src = { this.props.oldImage } />
                        <img alt = "after" src = { this.props.reduxImage } />
                    </div>
                );
            default:
                return (
                    <img alt = "full screenshot" src = { this.state.selected_img } />
                );
        }
    }

    closeModal () {
        document.body.removeChild(document.getElementById('gallery_root'));
    }

    render() { 
        return ( 
            <div className = "modal">

                <div className = "overlay" onClick = { this.closeModal }></div>

                <button className = "close-btn" onClick = { this.closeModal } >&times;</button>
 
                <div className = "controls-wrapper">
                    <button onClick = { this.toggleLayout}>
                        { this.state.layout.btn_text }
                    </button>

                    { (this.state.layout.mode === 'SINGLE') && (
                        <React.Fragment>
                            <button className = { 
                                this.state.view_mode == 'REDUX' ? 'controls-btn active' : 'controls-btn' }
                                onClick = { this.setViewMode.bind(this, 'REDUX')}
                            >
                                REDUX Ver.
                            </button>

                            <button className = { 
                                this.state.view_mode == 'ORIGINAL' ? 'controls-btn active' : 'controls-btn' }
                                onClick = { this.setViewMode.bind(this, 'ORIGINAL')}
                            >
                                    OLD Ver.
                            </button>
                        </React.Fragment>
                    )}
                </div>

                { this.renderWithLayout () }

            </div>
         );
    }
}
 
export default ComparisonModal;