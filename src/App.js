import React, {useState} from 'react';
import { Items, Menu,Categories,Cart } from './components';
import styles from './App.module.css';
import {Container, Typography, ThemeProvider, ListItemText} from '@material-ui/core';
import Theme from './Theme';
import { ListAlt } from '@material-ui/icons';

const allCategories = ['all', ...new Set(Items.map((item)=>item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories)
  //----------
  const [cartItems, setCartItems] = useState([])
  //-------------
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item)=>
      item.category === category);
      setMenuItems(newItems); 
  }
  //function to add items to cart
  //ultimate power
  const changuitoExpress = (itm) =>{
    let changuito = cartItems.map(item => item.title);
    let itemenu = menuItems.filter((it,i) =>{
      if(it.title === itm){
        return it.title}
      }
  )
    changuito.push(itemenu.[0].title)
    changuito = [... new Set(changuito.map(item => item))]
    console.log(changuito)
    console.log("changuito check")
    let position=0;
    let cartItem;
    let lista =[];
    const shoppingCart = menuItems.map(( item ,i ) => {
           return console.log(menuItems.[position]),
            position = i,
            cartItem = item,
          changuito.forEach(changui =>{
           console.log(changui)
            if(menuItems.[position].title === changui){
            return console.log(`succes ITS A MATCH`),
            lista.push(menuItems.[position])
          }else{
            console.log("not a match")
          }    
          });  
          
        });
        console.log(lista);
        setCartItems(lista)
      };

    //console.log(shoppingCart);
    //console.log(shoppingCart);
    //setCartItems(shoppingCart)

  //--------
  const addToCart = (itm) =>{
    let itemenu = menuItems.filter((it,i) =>{
      if(it.title === itm){
        return it}
      }
  )
   // console.log(itemenu.[0])
   setCartItems(itemenu)
 
  }
  const addToCartTwo = (itm) =>{
    console.log("cart has items... adding items...");
    let changuito=cartItems;
    let cart = cartItems.map(item =>{ 
        if(item.id !== itm.id){
        return itm
            }else{
              console.log("item already in cart")
            }
    });
    console.log(cart);
  }
  //----------------
  return (
    <ThemeProvider theme={Theme}>
    <Container>
      <Cart items={menuItems} cartItems={cartItems} />
      <Typography align="center" variant="h2" className={styles.title}  color="primary"> Al's dinner menu</Typography>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu  items={menuItems} addToCart={addToCart} addToCartTwo={addToCartTwo}  changuitoExpress={changuitoExpress} cartItems={cartItems}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
