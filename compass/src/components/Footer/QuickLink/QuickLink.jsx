import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'

library.add(fab)

const QuickLink = ({ quickLink }) => {
    const { link, icon } = quickLink

    const iconSize = 1
    return (
        <>
            <a href={link} target='blank'>
                <motion.div className="iconBox col-3"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FontAwesomeIcon icon={['fab', `${ icon }`]} size={`${iconSize}x`}/>
                </motion.div>
            </a>
        </>
    )
}

export default QuickLink