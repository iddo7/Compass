import React, { useEffect, useState } from 'react'
import './Footer.css'
import QuickLink from './QuickLink/QuickLink'

const Footer = () => {
    const [quickLinks, setQuickLinks] = useState([])

    useEffect(() => {
        fetch('/db/quick-links-db.json')
            .then(response => response.json())
            .then(arrayOfElements => {
                setQuickLinks(arrayOfElements)
            })
    })


    return (
        <>
            <div id='iconBarContainer' className="p-0 mx-auto">
                <div className="row justify-content-center">
                    <div id="iconBar" className={`col-10 col-xl-5 shadow`}>
                        <div className="row">

                        {
                            quickLinks.map((quickLink) => {
                                return <QuickLink key={quickLink.id} quickLink={quickLink}/>
                            })
                        }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer