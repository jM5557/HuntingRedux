
import React from 'react';
import ReactDOM from 'react-dom';

import Dropdown, { DropdownWithLinks } from './../components/dropdowns/dropdowns';
import VideosPage from './../components/pages/videos-page';

import LatestRelease from './../../_data/latest-release.json';

// toggable content
$(".toggable").click(function (event) {
    event.stopPropagation();
    $(".content", this).toggleClass('visible');
});

if (document.getElementById('videos-list'))
    ReactDOM.render(<VideosPage />, document.getElementById('videos-list'));

if (document.getElementById('main-dropdown'))
    ReactDOM.render(<DropdownWithLinks items = { LatestRelease.mirrors } />, document.getElementById('main-dropdown'));