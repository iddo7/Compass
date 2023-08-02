import React from 'react'
import './Card.css'
import cardImgUrl from "/assets/profile-smallest.jpg"

const Card = () => {
    return (
    <>
        <div className="card shadow">
            <img src={cardImgUrl} alt={cardImgUrl} className="img-fluid shadow"/>
            <div className="info text-center">
                <h3>Maybe</h3>
                <p>pipoco, Yung Rider</p>
            </div>
        </div>
    </>
    )
}

export default Card