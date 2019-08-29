import React, { Component } from 'react';

export default class Dropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayToggableList: false,
            selectedItem: props.items[0]
        }
    }

    setSelectedItem = (item) => {
        this.setState({
            selectedItem: item
        });
    }

    displayToggableList = () => {
        this.setState({
            displayToggableList: !this.state.displayToggableList
        });
    }

    renderToggableList = () => {
        let filteredItems = this.props.items.filter( (item) => {
            return item !== this.state.selectedItem
        } );

        return filteredItems.map( (item) => {
            return (
                <li onClick = { this.setSelectedItem.bind(this, item) }>{item.text}</li>
            );
        });
    }

    render () {
        return (
            <div class = "dropdown">
                <div class = "dropdown-wrapper">
                    <button class="selected-item toggle-item" onClick = { this.displayToggableList }>
                        { this.state.selectedItem.text }
                    </button>

                    { this.state.displayToggableList &&
                        <ul class = "item-list">
                            { this.renderToggableList() }
                        </ul>
                    }
                </div>
            </div>
        )
    }
}

export class DropdownWithLinks extends Dropdown {
    constructor (props) {
        super(props);
    }

    render () { 
        return (
            <div class = "dropdown">
                <div class = "dropdown-wrapper">
                    <button class="selected-item toggle-item" onClick = { this.displayToggableList }>
                        { this.state.selectedItem.text }
                    </button>

                    { this.state.displayToggableList &&
                        <ul class = "item-list">
                            { this.renderToggableList() }
                        </ul>
                    }
                </div>
                    
                <div class = "download-link">
                    <a href = { this.state.selectedItem.link } class = "download-link-a">Download Now</a>
                </div>
            </div>
        )
    }
}

