import React, { Fragment } from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return (
    <Fragment>
        <div className = "contact">
            <div className = "upper-content">
                <ul className = "navigation-links">
                    <li>
                        <Link to = "/videos/">videos</Link>
                    </li>
                    <li>
                        <Link to = "/mhp3rd/">mhp3rd</Link>
                    </li>
                    <li>
                        <Link to = "/about/">about</Link>
                    </li>
                </ul>
                <div class = "inner-content">
                    <h2>
                        Have feedback or questions?
                    </h2>
                    <p class = "subtitle">Message Us!</p>
                    <div class = "social-links">
                    
                        <a class = "twitter" href="https://twitter.com/huntingredux">
                            <span>On Twitter</span>
                        </a>
                
                        <a class = "discord" href="https://discordapp.com/huntingredux">
                            <span>On Discord</span>
                        </a>
                
                        <a class = "youtube" href="https://youtube.com/huntingredux">
                            <span>On YouTube</span>
                        </a>

                        <span class = "email-link">huntingredux@gmail.com</span>
                    </div>
                </div>
            </div>
        
            <div class="notice">
                Hunting REDUX is a fanmade project and is NOT affiliated with the Monster Hunter brand or own any trademarked content featured on this site.
                
                <br/> <br/>

                We do not condone piracy nor enable the illegal distribution of any licensed software.
            </div>
        </div>
    </Fragment>
    )
}

export default Footer;