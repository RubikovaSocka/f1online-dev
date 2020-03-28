import React, { Component } from 'react'
import SocialMediaBasicPlugin from './SocialMediaBasicPlugin';
import SearchBar from './SearchBar';

export default class HeaderPanel extends Component {
    render() {
        return (
            <div id="headerPanel" className="flex-space-between">
                <SocialMediaBasicPlugin />
                <img id="headerLogo" src="imgs/logo-medium.png" />
                <SearchBar />
            </div>
        )
    }
}
