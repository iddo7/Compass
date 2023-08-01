import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const QuickLink = ({ quickLink }) => {
    const { link, icon } = quickLink

    const iconSize = 1
    return (
        <>
            <a href={link} target='blank'>
                <div className="iconBox col-3">
                    <FontAwesomeIcon icon={['fab', `${ icon }`]} size={`${iconSize}x`}/>
                </div>
            </a>
        </>
    )
}

export default QuickLink