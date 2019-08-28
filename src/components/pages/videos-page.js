import React, { Component } from 'react';
import Videos from './../../../_data/videos.json';
import VideoItem from './../video-modal/video-item';

class VideosPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            filterMode: -1
        }
    }

    filterVideos = () => {
        let filteredVideos = Videos.videos.filter( (video) => {
            return video.category_ids.includes(this.state.filterMode)
        });
        console.log(this.state.filterMode);
        console.log(filteredVideos);
        return filteredVideos;
    }

    setFilter = (filterMode) => {
        this.setState({
            filterMode: filterMode
        });
    }

    renderByCategory = () => { 

        let filteredVideos = this.filterVideos();
        let renderVideos;

        if (filteredVideos.length < 1)
            return ( 
                <div className = "error empty">
                    No Videos Available
                </div>
            )
        else
            return filteredVideos.map( (v, i) => {
                return ( 
                    <VideoItem 
                        key = { i } 
                        video = { v } 
                        categories = { this.getCategoryList(v.category_ids) } 
                    /> 
                );
            });
    }

    renderButtons = () => {

        return Videos.categories.map( (c, i) => {
            return ( 
                <button 
                    key = { c.id } 
                    onClick = { this.setFilter.bind(this, c.id) }
                    className = { (this.state.filterMode === c.id) ? "selected" : "" }
                >
                    { c.text }
                </button>
            )
        });
    }

    findCategoryById = (category_id) => {
        return Videos.categories.find( c => c.id === category_id);
    }

    getCategoryList = (category_ids) => {
        return category_ids.map ( (category_id) => {
            return this.findCategoryById(category_id);
        });
    }

    renderDefaultView = () => {
        return Videos.videos.map( (v, i) => {
            return (
                <VideoItem 
                    key = { i } 
                    video = { v } 
                    categories = { this.getCategoryList(v.category_ids) } 
                />
            )
        })
    }

    render () {
        return (
            <div className = "videos-list">
                <div className = "controls-wrapper">
                    <span className = "label">Sort By</span>

                    { this.renderButtons() }

                    { this.state.filterMode !== -1 &&
                        
                        <button className = "clear-btn" onClick = { this.setFilter.bind(this, -1) }>
                            <span className = "clear-icon">&times;</span> <span>Clear</span>
                        </button>
                    }
                </div>

                <div className = "videos-wrapper">
                    <div className = "videos-inner">
                        { (this.state.filterMode !== -1) ? this.renderByCategory() : this.renderDefaultView() }
                    </div>
                </div>
            </div>
        )
    }
}
 
export default VideosPage;