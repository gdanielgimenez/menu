import React from 'react'
import { Card,CardActions,CardContent,Grid, IconButton, Typography } from '@material-ui/core';
import styles from './Menu.module.css';
import AddShoppingCartRoundedIcon from '@material-ui/icons/AddShoppingCartRounded';

//                  <div className={styles.container}>   
const Menu = ({ items , addToCart,addToCartTwo, cartItems, changuitoExpress}) => {

const addItem = (itm)=>{
    let shortItem = itm
    cartItems.length ? (
        changuitoExpress(shortItem)
    ): 
    (
        addToCart(shortItem)
    )
       // console.log(cartItems);
}    
    const MenuItems = 
        items.map((item) => {
            const {id,title,img, category, desc,price} = item;
            return(
                <Grid item  xs={12} sm={10}  md={6} key={id}>
                           
                    <Card className={styles.card}>                        
                      
                        <img src={img}  className={styles.media}
                            alt="food"
                            title={title}
                          />
                        
                          <CardContent>
                          <Typography variant="h6" className={styles.title}> {title}</Typography>
                            <Typography className={styles.price}>  {price} $</Typography>
                            <Typography className={styles.desc} paragraph color="textSecondary">{desc}</Typography>
                            <IconButton className={styles.add} onClick={()=>{addItem(item.title)}}>
                                <AddShoppingCartRoundedIcon fontSize="large" color="primary"></AddShoppingCartRoundedIcon>
                            </IconButton>
                          </CardContent>
                    </Card>
                    
                </Grid>
            )
        })
    

    return(
        <Grid container className={styles.grid} spacing={3}>
        {MenuItems}
        </Grid>
    )
}
export default Menu;