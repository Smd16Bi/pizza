import React from 'react'
import PropTypes from 'prop-types';

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => {
                    return (
                        <li
                            className={activeCategory === index ? "active" : ""}
                            onClick={() => { onClickCategory(index) }}
                            key={`${item}_${index}`}
                        >
                            {item}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
    activeCategory: PropTypes.number

}
Categories.defaultProps = {
    items: [],
    activeCategory: 0
}

export default Categories