import React, { Component } from 'react'

export default class ArticlePreview extends Component {
    render() {
        return (
            <div class="articlePreview">
                <a className="articleLink" href="#">
                    <img src="imgs/img0.png" />
                    <div className="articleTitle flex-between">
                        <h3 className="title titleFont fs-14">Leclerc svojmu tímu verí, tému motora Ferrari považuje za uzavretú</h3>
                        <p className="date titleFont fs-13 subTitleFontColor">22. marec 2020</p>
                    </div>
                </a>
            </div>
        )
    }
}
