import React, { Component } from 'react'

class MainArticlePreview extends Component {

    render() {
        return (
            <div className="mainArticlePreview zoomImageContainer">
                <a className="articleLink" href="#">
                    <img src="imgs/img0.png" />
                    <div className="mainArticleTitle blackBotGradient">
                        <h3 className="titleFont fs-18 ">Leclerc svojmu tímu verí, tému motora Ferrari považuje za uzavretú</h3>
                    </div>
                </a>
            </div>
        )
    }
}

export default MainArticlePreview