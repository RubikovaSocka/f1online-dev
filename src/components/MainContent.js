import React from "react"

import TitleArea from './TitleArea.js'
import TitleArticlePreview from './TitleArticlePreview.js'
import ArticlePreview from "./ArticlePreview.js";
import QuickNews from "./QuickNews.js";

function MainContent(props) {
    return (
        <main className="mainContent">
            <TitleArea {...props}/>
            <div className="articlesBlock">
                <div className="articlesBlockTitle titleFont">
                    <h2>Ďalšie správy</h2>
                </div>
                <div id="art-05">
                    <ArticlePreview />
                </div>
                <div id="art-06">
                    <ArticlePreview />
                </div>
                <div id="art-07">
                    <ArticlePreview />
                </div>
                <div id="art-08">
                    <ArticlePreview />
                </div>
                <div id="art-09">
                    <ArticlePreview />
                </div>
                <div id="art-10">
                    <ArticlePreview />
                </div>
                <button class="allArticlesButton basicButton" type="button">Pozrieť všetky</button> 

                <aside className="side">
                    <QuickNews />
                </aside>
            </div>

            <div className="calendarPreview">
                <h2 className="calendarTitle titleFont">Boxová tabuľa</h2>
                {<img className="calendarPreviewImage" src="imgs/straya.png" />}

                <span className="venueTitle reGrayTitle">Najbližšie preteky</span>
                <div className="timesData titleFont fs-14 fw-normal">
                    <div className="venueDetails">
                        <p className="venueName titleFont fs-16">VC Veľkej Británie</p>
                        <p className="date subTitleFontColor">22. - 24. marec 2020</p>
                    </div>
                    {/*<div className="timesDataItem tableHeader">
                        <p className="event"></p>
                        <p className="time">Štart</p>
                        <p className="tvStations">Vysiela</p>
                    </div>*/}
                    <div className="cols">
                        <div className="col1">
                            <div className="timesDataItem">
                                <span className="event">1. tréning</span>
                                <div className="inRow">
                                    <span className="time subTitleFontColor">06:00 - 07:30</span>
                                    {<span className="tvStations">vysiela Sport2 od 05:55</span>}
                                </div>
                            </div>
                            <div className="timesDataItem">
                                <span className="event">2. tréning</span>
                                <div className="inRow">
                                    <span className="time">09:00 - 10:30</span>
                                    {<span className="tvStations">vysiela Sport2 od 08:50</span>}
                                    
                                </div>
                            </div>
                            <div className="timesDataItem">
                                <span className="event">3. tréning</span>
                                <div className="inRow">
                                    <span className="time">04:00 - 05:00</span>
                                    {<span className="tvStations">vysiela Sport2 od 03:50</span>}
                                </div>
                            </div>
                        </div>
                        
                        <div class="col2">
                            <div className="timesDataItem">
                                <span className="event">Kvalifikácia</span>
                                <div className="inRow">
                                    <span className="time">07:00 - 08:00</span>
                                    {<span className="tvStations">vysiela Sport2 od 06:30</span>}
                                </div>
                            </div>
                            <div className="timesDataItem">
                                <span className="event">Preteky</span>
                                <div className="inRow">
                                    <span className="time">08:10</span>
                                    <span className="tvStations">vysiela Sport1 od 07:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
                {/*<button class="allArticlesButton" type="button">Celý kalendár</button>*/}
                <div class="linkAsButton">
                    <a href="#">Celý kalendár <img src="imgs/arrow-r.png"/></a>
                </div>
                
                <p className="resultsInfoboxTitle reGrayTitle">Výsledky: VC Nemecka</p>
                
                <div className="resultsInfobox">
                    {/*<p className="title">VC Nemecka</p>*/}
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">1.</span>
                        <div className="driverData podium-line">
                            <span className="name">Lewis Hamilton</span>
                            <span className="team">Mercedes</span>
                        </div>
                        <span className="time">1:25:56,563</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">2.</span>
                        <div className="driverData podium-line">
                            <span className="name">Sebastian Vettel</span>
                            <span className="team">Ferrari</span>
                        </div>
                        <span className="time">+0,855s</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">3.</span>
                        <div className="driverData podium-line">
                            <span className="name">Giancarlo Fisichella</span>
                            <span className="team">Toyota</span>
                        </div>
                        <span className="time">+5,855s</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">4.</span>
                        <div className="driverData">
                            <span className="name">Rubens Barichello</span>
                            <span className="team">Williams</span>
                        </div>
                        
                        <span className="time">+15,855s</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">5.</span>
                        <div className="driverData">
                            <span className="name">Sebastian Vettel</span>
                            <span className="team">Ferrari</span>
                        </div>
                        <span className="time">+17,052s</span>
                    </div>
                    <div class="linkAsButton">
                        <a href="#">Kompletné výsledky pretekov <img src="imgs/arrow-r.png"/></a>
                    </div>
                    
                </div>

                {<p className="champResultsInfoboxTitle reGrayTitle">Priebežné poradie šampionátu</p>}
                <div className="champResultsInfobox resultsInfobox">
                    {/*<p className="title">Priebežné poradie šampionátu</p>*/}
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">1.</span>
                        <div className="driverData podium-line">
                            <span className="name">Sebastian Vettel</span>
                            <span className="team">Ferrari</span>
                        </div>
                        <span className="points">121b</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">2.</span>
                        <div className="driverData podium-line">
                            <span className="name">Lewis Hamilton</span>
                            <span className="team">Mercedes</span>
                        </div>
                        <span className="points">105b</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">3.</span>
                        <div className="driverData podium-line">
                            <span className="name">Giancarlo Fisichella</span>
                            <span className="team">Toyota</span>
                        </div>
                        <span className="points">91b</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">4.</span>
                        <div className="driverData">
                            <span className="name">Rubens Barichello</span>
                            <span className="team">Williams</span>
                        </div>
                        <span className="points">89b</span>
                    </div>
                    <div className="resultsDataItem titleFont fs-14 fw-normal">
                        <span className="position">5.</span>
                        <div className="driverData">
                            <span className="name">Rubens Barichello</span>
                            <span className="team">Williams</span>
                        </div>
                        <span className="points">76b</span>
                    </div>
                    <div class="linkAsButton">
                        <a href="#">Kompletné poradie šampionátu <img src="imgs/arrow-r.png"/></a>
                    </div>
                    
                </div>
                

                {/*
                <img src="" />
                <div className="calendarDateItem">
                    <p className="date">22. marec 2020 15:35</p>
                    <p className="time">06:00 - 07:30</p>
                    <p className="tvStations">Sport1, RTL</p>
                    </div>*/}
            </div>
            <div className="championshipPreview">
                
            </div>
            <div className="sideAdd">

            </div>
        </main>
    )
}

export default MainContent