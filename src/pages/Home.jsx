import React from 'react'
import { Categories, SortPopup, PizzaBlock } from '../components/index'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from "../Redux/action/filters"


const categoryNames = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
const sortItems = [
    { name: "Popularity", type: "popularity" },
    { name: "Price", type: "Price" },
    { name: "Alphabetically", type: "alphabetically" }
]

// 01:52:00
const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSortBy = React.useCallback((name) => {
        dispatch(setSortBy(name))
    })

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    onClickItem={onSortBy}
                    items={sortItems}
                />
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