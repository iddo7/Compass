import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

    const iconBarSize = 8
    const iconSize = 7

    const iconBarOffset = (12 - iconBarSize) / 2

  return (
    <>
        <div className="container-fluid no-padding">
            <div id="iconBar" className={`col-${iconBarSize} offset-${iconBarOffset}`}>
                <div className="row">

                    <div className="iconBox col-3 text-center">
                        <FontAwesomeIcon icon={faSpotify} size={`${iconSize}x`}/>
                    </div>

                    <div className="iconBox col-3 text-center">
                        <FontAwesomeIcon icon={faSpotify} size={`${iconSize}x`}/>
                    </div>

                    <div className="iconBox col-3 text-center">
                        <FontAwesomeIcon icon={faSpotify} size={`${iconSize}x`}/>
                    </div>

                    <div className="iconBox col-3 text-center">
                        <FontAwesomeIcon icon={faSpotify} size={`${iconSize}x`}/>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Footer