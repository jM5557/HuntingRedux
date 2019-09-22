import React, { Component } from 'react';

export default class DropdownWithLinks extends Component {
    constructor (props) {
        super(props);

        this.state = {
            displayToggableList: false,
            selectedItem: props.data.download_links[0]
        }
    }

    setSelectedItem = (item) => {
        this.setState({
            selectedItem: item,
            displayToggableList: false
        });
    }

    displayToggableList = () => {
        this.setState({
            displayToggableList: !this.state.displayToggableList
        });
    }

    renderToggableList = () => {
        let filteredItems = this.props.data.download_links.filter( (item) => {
            return item !== this.state.selectedItem
        } );

        return filteredItems.map( (item, index) => {
            return (
                <li 
                    key = { index }
                    onClick = { this.setSelectedItem.bind(this, item) }
                >
                    {item.name}
                </li>
            );
        });
    }

    render () { 
        return (
            <div class = "dropdown">
                <div class = "download-link-wrapper">
                    <a href = { this.state.selectedItem.link } className = "download-link">{this.props.data.text}</a>
                </div>

                <div class = "dropdown-wrapper">
                    <div className = "selected-item-wrapper">
                        <h3>
                            Download From
                        </h3>
                        <button 
                            className = "selected-item toggle-item" 
                            onClick = { this.displayToggableList }
                        >
                            { this.state.selectedItem.name }
                        </button>
                    </div>

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

