import  React, { useState } from 'react';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Button, IconButton } from '@material-ui/core';
import styles from './Cart.module.css';
import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';
import RemoveCircleOutlineRoundedIcon from '@material-ui/icons/RemoveCircleOutlineRounded';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));


const Cart = ({ cartItems, changuitoExpress,takeItems }) =>{
//drawer-----------------------------------------------------------

const classes = useStyles();
const theme = useTheme();
const [open, setOpen] = React.useState(false);
const [totalPrice, setTotalPrice] = useState();
const handleDrawer = () =>{
    setOpen(!open)
}

const pricesList = cartItems.reduce((sum,item) => sum+item.cartPrice,0)
                    
const total = ()=>{ 
  if(pricesList){
  setTotalPrice(pricesList)
  }
}                

 const minus = (id)=> {
    cartItems.forEach(item =>{
        if(item.id === id){
            return  console.log(item),
            item.cartPrice -= item.price,
            item.qty -=1,
            console.log(item.cartPrice+" "+item.qty)
            }
        });
   const minusList = [...cartItems]
   takeItems(minusList);
 }
 const checkout = ()=>{
   alert("thanks for your purchase!");
   window.location.reload();
    
 }
 //----------
const Cart = cartItems.length ?( 
    new Set(cartItems.map(item =>{
      return(
              <div >
                <ListItem  key={item.id}>
                  <ListItemText align="left" > <Typography variant="caption">{item.title}</Typography> </ListItemText>
                  <IconButton fontSize="small" onClick={()=>minus(item.id)}> <RemoveCircleOutlineRoundedIcon /> </IconButton>
                    <Typography> {item.qty} </Typography>
                  <IconButton fontSize="small"  onClick={()=>changuitoExpress(item.title)}>< AddCircleOutlineRoundedIcon /></IconButton>
                </ListItem>
                <ListItem> 
                  <ListItemText align="right"> <Typography color="primary" variant="body2"> { (item.cartPrice = item.price*item.qty).toFixed(2)} $ </Typography> </ListItemText>
                </ListItem>
              </div>
            )
          }) 
        ))
        :(<div align="center"><Typography variant="subtitle1" color="textSecondary"> empty cart </Typography> </div>)
//
//</IconButton>
//----------------------------------
    return(  
    
    <div className={styles.container}>
        <AppBar className={styles.nav}>
          <Toolbar>
            <IconButton  className={styles.button} onClick={handleDrawer} >
                <ShoppingCartRoundedIcon  fontSize="default"></ShoppingCartRoundedIcon>
            </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div  className={classes.drawerHeader}>
          <ListItem align="center">
            <Typography variant="h6"  color="primary">items in your cart</Typography>
          </ListItem>
        </div>
        <Divider />
        <List>
          { Cart }
        </List>
        <Divider />
        <List>
          <ListItemText align="center"> 
             <Typography variant="h6">Total : {pricesList.toFixed(2)} $ </Typography>
          </ListItemText>
          <Button variant="contained" fullWidth={true} color="secondary" onClick={checkout}> checkout</Button>
        </List>
      </Drawer>
    </div>
)}
export default Cart;