import React from 'react'
import './Card.css'
import cardImgUrl from "/assets/profile-smallest.jpg"

const Card = () => {
    return (
        <>
            <div className="card-1">
                <img src={cardImgUrl} alt="Not Found" className="cover"/>
                <div className="texts">
                    <p className="title">Maybe</p>
                    <p className="artist">pipoco, Yung Rider</p>
                </div>
            </div>
        
        </>
    )
}

export default Card