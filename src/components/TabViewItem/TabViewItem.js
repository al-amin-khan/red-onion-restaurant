import React, { useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { CategoryContext } from '../../App';
import { useContext } from 'react';
import { useState } from 'react';
import platters from '../../data/platters';
import { Grid } from '@material-ui/core';
import ItemCard from '../ItemCard/ItemCard';


const TabViewItem = () => {
  const [dish, setDish] = useState(platters);
  // category context
  const [category, setCategory] = useContext(CategoryContext);

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    // console.log(newValue);
    setSelectedTab(newValue);
  };

  const loadData = () => {
    const categorizedDish = dish.filter(item => item.category === category);
    setDish(categorizedDish);
  };

  useEffect(() => {
    loadData()
  }, [category,]);

  return (
    <>
      <AppBar position="static" color="default">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          centered
        >

        <Tab label="Breakfast"  onClick={setCategory('breakfast')}/>
        <Tab label="Lunch"  onClick={setCategory('lunch')} />
        <Tab label="Dinner" onClick={setCategory('dinner')} />
        </Tabs>
      </AppBar>
      { selectedTab ===0 && <h2>One</h2>}
      { selectedTab ===1 && <h2>Two</h2>}
      { selectedTab ===2 && <h2>Three</h2>}

      {/* <div>
        <Grid container>
          {
            dish.map(item => <ItemCard item={item} key={item.id}></ItemCard>)
          }
        </Grid>
      </div> */}
      
    </>
  );
};

export default TabViewItem;