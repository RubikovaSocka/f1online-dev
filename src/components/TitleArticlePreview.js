import React, { Component } from 'react'

class TitleArticlePreview extends React.Component{
    render() {
        return (
            <div className="sideArticlePreview zoomImageContainer">
                <a className="articleLink" href="#">
                    <img src="imgs/img1.png"/>
                    <div className="sideArticleTitle blackBotGradient">
                        <h3 class="titleFont fs-14">Leclerc svojmu tímu verí, tému motora Ferrari považuje za uzavretú</h3>
                    </div>
                </a>
            </div>
        )
    }
}

export default TitleArticlePreview