import React, { Component } from 'react'
import MainArticlePreview from './MainArticlePreview'
import TitleArticlePreview from './TitleArticlePreview'
import MagArticlePreview from './MagArticlePreview';

class TitleArea extends Component {

    render() {
        return (
            <div className="titleArea">
                <div id="art-00">
                    <MainArticlePreview />
                </div>
                <div id="art-01">
                    <TitleArticlePreview />
                </div>
                <div id="art-02">
                    <TitleArticlePreview />
                </div>
                <div id="art-03">
                    <TitleArticlePreview />
                </div>
                <div id="art-04">
                    <TitleArticlePreview />
                </div>
            </div>
        )
    }
}

export default TitleArea;