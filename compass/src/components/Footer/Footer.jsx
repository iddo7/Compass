import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify, faSoundcloud, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const iconBarSize = 10
    const iconSize = 1

    const iconBarOffset = (12 - iconBarSize) / 2

  return (
    <>
        <div id='iconBarContainer' className="container p-0 mx-auto">
            <div className="row justify-content-center">
                <div id="iconBar" className={`col-${iconBarSize} shadow`}>
                    <div className="row">
                        <div className="iconBox col-3">
                            <FontAwesomeIcon icon={faSpotify} size={`${iconSize}x`}/>
                        </div>

                        <div className="iconBox col-3">
                            <FontAwesomeIcon icon={faSoundcloud} size={`${iconSize}x`}/>
                        </div>

                        <div className="iconBox col-3">
                            <FontAwesomeIcon icon={faYoutube} size={`${iconSize}x`}/>
                        </div>

                        <div className="iconBox col-3">
                            <FontAwesomeIcon icon={faInstagram} size={`${iconSize}x`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer