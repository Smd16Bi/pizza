import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index'


const Home = ({ items = [] }) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={(name) => console.log(name)}
                    items={["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"]}
                />
                <SortPopup items={[
                    { name: "Popularity", type: "popularity" },
                    { name: "Price", type: "Price" }, 
                    { name:"Alphabetically", type: "alphabetically"}
                ]} />
            </div>
            <h2 className="content__title">All</h2>
            <div className="content__items">
                {items.map(obj => {
                    return <PizzaBlock key={obj.id} {...obj} />
                })}
            </div>
        </div>
    )
}

export default Home