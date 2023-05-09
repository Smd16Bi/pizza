import React from 'react'
const Categories = ({ items,onClick }) => {
    const [activeItem, setActiveItem] = React.useState(0)
    const onSelectedItem = (index) => {
        setActiveItem(index)
    }
    return (
        <div className="categories">
            <ul>
                {items && items.map((item, index) => {
                    return <li className={activeItem === index ? "active" : ""}  onClick={()=>{onSelectedItem(index)}} key={`${item}_${index}`}>{item}</li>
                })}
            </ul>
        </div>
    )
}

export default Categories