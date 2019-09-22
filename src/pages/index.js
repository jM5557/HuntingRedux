import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LargeGallery from "../components/partials/gallery/large-gallery";

let previewItemBoxes = [
  {
    title: 'An Ecological Marvel',
    subtitle: 'Monsters retextured and reimagined to appear more fearsome than ever!',
    link: "/mhp3rd",
    image: '/images/mhp3rd/screens-1.png'
  },
  {
    title: 'With All The Comforts Of Home',
    subtitle: 'Yukumo Village and its facilities are now open to all hunters!',
    link: "/mhp3rd",
    image: '/images/mhp3rd/screens-2.png'
  },
  {
    title: 'The Same Great Hunts',
    subtitle: 'Enhanced HUD and visuals brings new life to the classic Monster Hunter formula.',
    link: "/mhp3rd",
    image: '/images/mhp3rd/screens-4.png'
  }
];

const PreviewItemBox = ({ item }) => (
  <div className = "preview-item-side-box">
    <img src = { item.image } alt="screen image" />
    <h3>
      { item.title }
    </h3>
    <p>
      { item.subtitle }
    </p>
    <div className = "game-link">
      <a
        href = { item.link } 
        alt = "Link to game details"
        className = "link-btn"
      >
        View Details 
        <b className = "right-caret"></b>
      </a>
    </div>
  </div>
);

class IndexPage extends Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    let renderPreviewItemBoxes = previewItemBoxes.map( (item, index) => {
      return (
        <div className = "preview-item-container" key = { index }>
          <PreviewItemBox item = { item } />
        </div>
      );
    });

    return (
      <Layout location = { this.props.location }>
      <SEO title="Home" />
      <section id = "content-center">
        { renderPreviewItemBoxes }
      </section>

      <section id = "gallery">
        <h1 class = "heading">Screenshots</h1>
        <LargeGallery />
      </section>

      <section id = "home-bottom">
        
        <div className = "inner-content">
          
          <div class="box-art">
            <img src = "./../images/mhp3rd/hero-wp.jpg" alt="game box art" />
          </div>

          <div className = "side-box">

            <h3 className = "with-bars">High Quality Hunting.</h3>

            <p>
              <button className = "btn">Download Texture Pack</button>
            </p>

            
              <div className = "box-item">
                <h2>Requirements</h2>
                <ul>
                  <li>PPSSPP Emulator <a className = "download link ppsspp" href = "https://ppsspp.org">Download Now</a></li>
                  <li>Monster Hunter Portable 3rd ISO</li>
                </ul>
              </div>
          </div>

        </div>

      </section>
    </Layout>
    )
  }
}

export default IndexPage;
