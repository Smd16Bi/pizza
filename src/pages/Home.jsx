import React from 'react'
import { Categories, SortPopup, PizzaBlock, LoadingBlock } from '../components/index'
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setSortBy } from "../Redux/action/filters"
import { fetchPizzas } from "../Redux/action/pizzas"



const categoryNames = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

const sortItems = [
    { name: 'Popularity', type: 'popular', order: 'desc' },
    { name: 'Price', type: 'price', order: 'desc' },
    { name: 'Alphabetically', type: 'name', order: 'asc' },
  ];

const Home = () => {
    const dispatch = useDispatch();

    const items = useSelector(({ pizzas }) => pizzas.items);
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
      }, []);


    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy));
    }, [category, sortBy]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                    <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                    />
            </div>
            <h2 className="content__title">All</h2>
            <div className="content__items">
                {
                    isLoaded ? items.map(obj => {
                        return <PizzaBlock key={obj.id} {...obj} isLoading={true} />
                    }) :
                        Array(12)
                            .fill(0)
                            .map((_, index) => <LoadingBlock key={index} />)
                }

            </div>
        </div>
    )
}

export default Home