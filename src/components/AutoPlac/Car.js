import React from 'react'
import classes from './Car.module.css'
import CardFolder from '../ui/CardFolder'

function Car({ id, mark, image, date, price, description  }) {
    return (
    <CardFolder>
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={image} alt={mark} />
            </div>
            <div className={classes.content}>
            <h3>MARKA: {mark}</h3>
            <h3>GODISTE: {date}</h3>
            <h3>CENA: {price} eura</h3>
            <p>OPIS: {description}</p>
            </div>
            <div className={classes.actions}>
                <button>To buy now</button>
            </div>
        </li>
    </CardFolder>
    )
}

export default Car
