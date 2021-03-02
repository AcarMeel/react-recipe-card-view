import React from 'react'
import styles from './Card.module.css';

const Card = ({ image, title, description }) => {
    return (
        <div className={styles.card}>
           <img src={image} alt={title} className={styles.card__image} /> 
           <h2 className={styles.card__title}>{title}</h2>
           <p className={styles.card__description}>{description}</p>
           <button className={styles.card__btn}>View Recipe</button>
        </div>
    )
}

export default Card
