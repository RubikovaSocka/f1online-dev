import React, { Component } from 'react'

export default class OneLineNews extends Component {
    render() {
        return (
            <div class="oneLineNews subTitleFontColor">
                <p class="date">22. marec 2020 15:35</p>
                <a class="oneLineMessageLink" href="#">
                <p class="message contentFont fs-13 fw-normal">Holandské médiá vylučujú možnosť, že by sa Veľká cena Holandska mohla uskutočniť začiatkom mája.</p>
                </a>
            </div>
        )
    }
}
