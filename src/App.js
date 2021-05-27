import React, {useState} from 'react';
import { Items, Menu,Categories,Cart } from './components';
import styles from './App.module.css';
import {Container, Typography, ThemeProvider, ListItemText} from '@material-ui/core';
import Theme from './Theme';


const allCategories = ['all', ...new Set(Items.map((item)=>item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories);
  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState()
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(Items);
      return;
    }

    //-----
    const newItems = Items.filter((item)=>
      item.category === category);
      setMenuItems(newItems); 
  }
  //function to add items to cart if cart isn't empty anymore
  const changuitoExpress = (itm) =>{
    let changuito = cartItems.map(item => item.title);
    let itemenu = Items.filter((it,i) =>{
      if(it.title === itm){
        return it.title,
      it.qty+=1}
      }) 
    changuito.push(itemenu.[0].title)
    changuito = [... new Set(changuito.map(item => item))]
    let position=0;
    let cartItem;
    let lista =[];
    const shoppingCart = Items.map(( item ,i ) => {
            return position = i,
            cartItem = item,
          changuito.forEach(changui =>{
            if(Items.[position].title === changui){
            return lista.push(Items.[position])
            }    
          });  
        });
        setCartItems(lista)
  };
  //add items to cart when cart it is empty----
  const addToCart = (itm) =>{
      let itemenu = Items.filter((it,i) =>{
      if(it.title === itm){
        return it,
        it.qty+=1}
      })
      setCartItems(itemenu)
      setTotal(itemenu[0].price)
  }
  //remove items from the cart when qty equals zero
  const takeItems  = (minusList) =>{
    const less = minusList.filter(item => item.qty > 0)
    setCartItems(less)
  }
  const totalPrice = (prices) =>{
   setTotal(prices)
  }
  //----------------
  return (
    <ThemeProvider theme={Theme}>
    <Container>
      <Cart total={total} totalPrice={totalPrice} items={menuItems} cartItems={cartItems} takeItems={takeItems} changuitoExpress={changuitoExpress}/>
      <Typography align="center" variant="h2" className={styles.title}  color="primary"> Al's dinner menu</Typography>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu  totalPrice={totalPrice} items={menuItems} addToCart={addToCart}   changuitoExpress={changuitoExpress} cartItems={cartItems}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
