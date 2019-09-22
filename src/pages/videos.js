import React, { Component } from 'react';

import Layout from "../components/layout"
import SEO from "../components/seo"

import Videos from './../components/videos-page/videos.json';
import VideoItem from './../components/videos-page/video-item';

class VideoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMode: -1,
            limit: 15,
            limitIncreaseFactor: 15,
            videos: Videos.videos
        }
    }

    filterVideos = (filterMode) => {
        return Videos.videos.filter( (video) => {
            return video.category_ids.includes(filterMode)
        });
    }

    setFilter = (filterMode) => {
        if (this.state.filterMode === filterMode 
            || filterMode === -1)
            this.setState({
                filterMode: -1,
                videos: Videos.videos
            });
        else {
            
            this.setState({
                filterMode: filterMode,
                videos: this.filterVideos(filterMode)
            });
        }
    }

    loadMore = () => {
        this.setState( (prev) => {
           return { limit: prev.limit + this.state.limitIncreaseFactor }
        })
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

    renderVideos = () => {
        return this.state.videos.slice(0, this.state.limit).map( (v, i) => {
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
                    <div class = "category-buttons">
                        <span className = "label">Filter By</span>

                        { this.renderButtons() }
                    </div>

                    { this.state.filterMode !== -1 &&
                        
                        <button className = "clear-btn" onClick = { this.setFilter.bind(this, -1) }>
                            <span className = "clear-icon">&times;</span> <span>Clear</span>
                        </button>
                    }
                </div>

                <div className = "videos-wrapper">

                    { (this.state.videos.length > 0) && (
                        <div className = "videos-inner">
                            { this.renderVideos() }
                        </div>
                    )}
                    
                    { (this.state.videos.length < 1) && (
                        <div className = "error empty">
                            No Videos Available
                        </div>
                    )}

                    { (this.state.limit < this.state.videos.length) && (
                        <button className = "load-more-btn" onClick = { this.loadMore }>Load More</button>
                    )}
                </div>
            </div>
        )
    }
}

class VideosPage extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return (
            <Layout location = { this.props.location }>
                <SEO title="Hunting Redux | Videos" />
                <section class = "sect videos">
                    <div class = "top-wrapper">
                        <header>
                            Video Gallery
                        </header>
                        <div class = "link-wrapper">
                            <h3>Explore All Videos</h3>
                            <a href = "https://www.youtube.com/channel/UC1Vim6AS0sVYCkmumJN1u_A" class = "youtube">
                                On YouTube
                            </a>
                            <a href = "https://drive.google.com/" class = "g-drive">
                            Full Resolution on Google Drive
                            </a>
                        </div>
                    </div>
                </section>
                <div class = "video-gallery-wrapper">
                    <div id = "video-page-root">
                        <VideoList />    
                    </div>
                </div>
            </Layout>
        );
    }
}
 
export default VideosPage;