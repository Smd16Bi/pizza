import React from 'react'

const SortPopup = ({items = []}) => {
    // 01:30:00
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const [activeSort, setActiveSort] = React.useState(0);
    const activeLavel = items[activeSort];

    const sorfRef = React.useRef();
    const toggleVisiblePopUp = () => {
        setVisiblePopup(!visiblePopup)
    }
    const handleOutsideClick = (e) => {
        setVisiblePopup(!e.target.closest(".sort") ? false : true);
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, [])
    const onSelectedItem = (index) => {
        setActiveSort(index);
        setVisiblePopup(!visiblePopup)
    }

    return (
        <div ref={(ref) => { sorfRef.current = ref }} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Sort by:</b>
                <span onClick={toggleVisiblePopUp}>{activeLavel}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul>
                    {items && items.map( (el,index) => {
                        return <li onClick={() => onSelectedItem(index)} className={activeSort === index ? "active" : ""}  key={`${el}_${index}`}>{el}</li>
                    })}
                </ul>
            </div>}
        </div>
    )
}

export default SortPopup