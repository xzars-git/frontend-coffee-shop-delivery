import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {


  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Welcome to our Coffee Shop! Explore our menu filled with delicious coffees, teas, sandwiches, salads, pastries, and more. Customize your meal just the way you like it and place your order easily for dine-in, takeout, or delivery. Enjoy your meal and treat yourself to something special at our Coffee Shop!</p>
        <div className="explore-menu-list">
            {menu_list.map((item, index) =>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All" : item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu