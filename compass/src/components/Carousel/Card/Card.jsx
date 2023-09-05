import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'
import cardImgUrl from '/assets/Maybe_Cover_V3-Smallest.jpg'

const Card = () => {
    return (
    <>
        <div className="card shadow">
            <motion.img src={cardImgUrl} alt={cardImgUrl} className="img-fluid shadow"
                whileHover={{ scale : 1.1 }}
                whileTap={{ scale : 0.95 }}/>
            <div className="info text-center">
                <h3>Maybe</h3>
                <p>pipoco, Yung Rider</p>
            </div>
        </div>
    </>
    )
}

export default Card