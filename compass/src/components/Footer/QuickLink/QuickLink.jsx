import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const QuickLink = ({ icon }) => {
    const iconSize = 1
    return (
        <>
            <div className="iconBox col-3">
                <FontAwesomeIcon icon={['fab', `${ icon }`]} size={`${iconSize}x`}/>
            </div>
        </>
    )
}

export default QuickLink