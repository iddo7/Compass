import React from "react";
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <div id="header-row" className="row align-items-center">
                    <div id="profile-img" className="p-0"></div>

                    <div id="username" className="col-6 p-0">
                        <h2>pipoco</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header