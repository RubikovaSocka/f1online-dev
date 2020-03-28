import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div className="searchBar flex-center">
                <form class="searchForm flex-center">
                    <input type="text" placeholder="Hľadať" className="titleFont"
                        aria-label="Search" />
                    <button type="submit"><i class="fa fa-search flex-center"><img src="imgs/magglass.png"></img></i></button>
                </form>
            </div>
        )
    }
}
