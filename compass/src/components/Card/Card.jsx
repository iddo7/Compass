import React from 'react'
import './Card.css'
import cardImgUrl from "/assets/profile-smallest.jpg"

const Card = () => {
    return (
        <>
            {/** 
            <div className="card">
                <img src={cardImgUrl} alt="Not Found" className="cover"/>
                <div className="texts">
                    <p className="title">Maybe</p>
                    <p className="artist">pipoco, Yung Rider</p>
                </div>
            </div>
            */}

            <div className="card-new p-0 col-9">
                <img src={cardImgUrl} alt="Not Found" className="img-fluid"/>
                <div className="texts-new text-center">
                    <h3>Maybe</h3>
                    <p>pipoco, Yung Rider</p>
                </div>
            </div>
        
        </>
    )
}

export default Card