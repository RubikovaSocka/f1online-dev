import React, { Component } from 'react'
import OneLineNews from './OneLineNews';

export default class QuickNews extends Component {
    render() {
        return (
            <div>
                <span id="quickNewsTitle" className="reGrayTitle">Rýchle správy</span>
                <div id="quickNewsBlock" class="scrollable">
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                    <OneLineNews />
                </div>
            </div>
        )
    }
}
