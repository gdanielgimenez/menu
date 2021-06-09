import React from 'react'
import food from './images/hero-1.jpg';
import styles from './Hero.module.css';
import { Button, Typography } from '@material-ui/core';

const Hero = ({scrdwn}) =>{

    return(
        <div className={styles.heroContainer}>
            <img className={styles.image} src={food} alt="food" />
            <Typography variant="h1" className={styles.title}>Welcome to Al's dinner </Typography>
            <Button onClick={scrdwn } className={styles.button} variant="outlined" size="large" > menu</Button>
        </div>
    )
}

export default Hero;