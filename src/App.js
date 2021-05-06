import React, {useState} from 'react';
import { Items, Menu,Categories } from './components';
import styles from './App.module.css';
import {Container, Typography, ThemeProvider} from '@material-ui/core';
import Theme from './Theme';

const allCategories = ['all', ...new Set(Items.map((item)=>item.category))];

function App() {
  const [menuItems,setMenuItems] = useState(Items);
  const [categories, setCategories] = useState(allCategories)
  
  const filterItems = (category) => {
    if(category === 'all'){
      setMenuItems(Items);
      return;
    }
    const newItems = Items.filter((item)=>
      item.category === category);
      setMenuItems(newItems); 
  }

  return (
    <ThemeProvider theme={Theme}>
    <Container>
      <Typography align="center" variant="h2" className={styles.title}  color="primary"> Al's dinner menu</Typography>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu  items={menuItems}/>
    </Container>
    </ThemeProvider>
  );
}

export default App;
