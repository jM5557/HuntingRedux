import React from "react";
import { Link } from "gatsby";
import DropdownWithLinks from './dropdowns';
import LatestRelease from './../../lib/data/latest-release.json';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header id = "top-header">
        <div id="navbar-root" class="home">
          <header id="nav-top">
            <Link to = "/" id = "logo-top">Hunting REDUX</Link>

            <div id = "nav-menu" class="CLOSED">
              <button id = "close-menu" class = "close-btn menu-btn">Close Menu</button>
              <a href="/mhp3rd">MHP3rd Redux</a>
              <Link to="/videos/">Videos</Link>
              <a href="/about">About</a>
              <a href="https://ppsspp.org" class="ppsspp_logo">Get PPSSPP</a>
            </div>
            
            <div class="dl_links">
              <a href="/" class="dl-btn">Download Texture Pack</a>
              <button id = "menu-btn" class="nav__hamburger_menu menu-btn">Menu</button>
            </div>
          </header>
        </div>

        { (this.props.location.pathname === "/") && (
          <div id="main-center-inner-wrapper">
            <h2 className = "slogan large">Monster Hunter Portable 3rd</h2>
            <h2 className = "slogan">
              HD Texture Pack
            </h2>

            <div className = "main-center-content-wrapper" id = "main-dropdown">
              <DropdownWithLinks data = { LatestRelease } />
            </div>

            <div className = "details">
              <div className = "subdetails">
                <p className = "size">{ LatestRelease.file_size }</p>
                <p className = "version">v.{ LatestRelease.version }</p>
              </div>

              <div class = "hash_wrapper">
                <span>MD5 Hash </span>
                
                <span className = "hash_code">
                  { LatestRelease.MD5_hash }
                </span>
              </div>
            </div>
          </div>
        )}
      </header>
    )
  }
}

export default Header
