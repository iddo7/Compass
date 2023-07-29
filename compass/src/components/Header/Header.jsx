import React from "react";
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row align-items-center">

                    <div id="profile-img" className="col-2 offset-1 no-padding"></div>

                    <div id="username" className="col-6 no-padding">
                        <h2 className="header">pipoco</h2>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header