import React from "react"

import MyNavbar from "./MyNavbar"
import HeaderPanel from "./HeaderPanel";

class Header extends React.Component {
    
    render() {
        return (
            
            <div id="header">
                <div id="headerBackground">
                    <HeaderPanel />
                </div>
                <MyNavbar/>
            </div>
            
        )
    }
}

export default Header