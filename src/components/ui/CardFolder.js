import React from 'react'
import classes from './CardFolder.module.css'

function CardFolder( {children} ) {
    return (
        <div className={classes.card}>{children}</div>
    )
}

export default CardFolder
