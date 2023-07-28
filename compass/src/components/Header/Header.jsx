import React from "react";
import profilImageUrl from '/assets/profile-smallest.jpg'
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center m-4">
                    <div id="profile-img" className="col-2">
                    </div>
                    <div className="col-8">
                        <h1 className="header">pipoco</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header