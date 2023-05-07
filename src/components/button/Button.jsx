import React from 'react'
import classNames from 'classnames'


const Button = (props) => {
    return (
        <button className={classNames("button", {
            "button--outline": props.outline === true,
        })}>
            {props.children}
        </button>
    )
}

export default Button
