import React, { Component } from 'react';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        
    }

    makeItemsClickable = () => {
        
    }

    makeListToggable = () => {
        
    }

    render () {
        return (<div>Test</div>)
    }
}

export class DropdownWithLinks extends Component {
    constructor (props) {
        super(props);
    }
    
    makeItemsClickable = () => {
        
    }

    render () { 
        return (
            <div class = "dropdown">
                <div class = "dropdown-wrapper">
                    <button class="selected-item toggle-item">
                        Text
                    </button>

                    <ul class = "item-list">
                    </ul>
                </div>
                    
                <div class = "download-link">
                    <a href="#" class = "download-link-a">Download Now</a>
                </div>
            </div>
        )
    }
}

