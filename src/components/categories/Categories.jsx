import React from 'react'
const Categories = React.memo(({ items, onClickItem }) => {
    const [activeItem, setActiveItem] = React.useState(0)
    const onSelectedItem = (index) => {
        setActiveItem(index)
        onClickItem(index)
    }
    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => {
                    return (
                        <li
                            className={activeItem === index ? "active" : ""}
                            onClick={() => { onSelectedItem(index) }}
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

export default Categories