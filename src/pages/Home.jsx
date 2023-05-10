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
                <SortPopup items={["Popularity", "Price", "Alphabetically"]} />
            </div>
            <h2 className="content__title">All</h2>
            <div className="content__items">
                {items.map(obj => {
                    return <PizzaBlock key={obj.id} item={obj} />
                })}
            </div>
        </div>
    )
}

export default Home