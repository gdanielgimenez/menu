import React from 'react';
import {Button, ButtonGroup, Container} from '@material-ui/core';
import styles from './Categories.module.css';
const Categories = ({filterItems,categories})=> {
const menuButtons = categories.map((category,index)=>{
    return(
        <Button className={styles.buttons}  color="primary" key={index} onClick={()=>{filterItems(category)}}>{category}</Button>
    )
})

    return(
        <Container  align="center">
        <ButtonGroup   variant="text">
            {menuButtons}
        </ButtonGroup>
        </Container>
    )
}
export default Categories;