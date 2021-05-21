import  React, { useState } from 'react';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import { Button, IconButton } from '@material-ui/core';
import styles from './Cart.module.css';

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


const Cart = ({ items, cartItems }) =>{
//drawer--

const classes = useStyles();
const theme = useTheme();
const [open, setOpen] = React.useState(false);
const [totalPrice, setTotalPrice] = useState();
const handleDrawer = () =>{
    setOpen(!open)
}
let sum=0;
/*const Bill = cartItems.length ? (
  cartItems.forEach(item =>{
   sum = sum +item.price
  }),
  console.log(sum)
):(null)*/


const Cart = cartItems.length ?( 
    new Set(cartItems.map(item =>{
      return(
          <div >
            <ListItem key={item.id}>
              <ListItemText>{item.title} </ListItemText>
              <ListItemText> {item.price}</ListItemText>
            </ListItem>
          </div>
        )
    }) 
))
:(<Typography variant="caption" color="textSecondary" align="center"> empty </Typography>)


//----------------------------------
    return(  
    <div className={styles.container}>
        <IconButton className={styles.button} color="primary" onClick={handleDrawer}>
            <ShoppingCartRoundedIcon fontSize="large"></ShoppingCartRoundedIcon>
        </IconButton>
        <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h5" align="center" color="primary">items on your order</Typography>
        </div>
        <Divider />
        <List>
          { Cart }
        </List>
        <Divider />
        <List>
          <h1>sub-total</h1>
          <h1>total :  </h1>
          <Button variant="contained" fullWidth={true} color="secondary"> checkout</Button>
        </List>
      </Drawer>
    </div>
)}
export default Cart;