import React from 'react'
import './Footer.css'
import QuickLink from './QuickLink/QuickLink'

const Footer = () => {

    const iconBarSize = 10

  return (
    <>
        <div id='iconBarContainer' className="container p-0 mx-auto">
            <div className="row justify-content-center">
                <div id="iconBar" className={`col-${iconBarSize} shadow`}>
                    <div className="row">
                        <QuickLink icon='youtube'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer