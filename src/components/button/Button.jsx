import React from 'react'
import classNames from 'classnames'


const Button = ({className,outline,children}) => {
    return (
        <button className={classNames("button", className,
            {
                "button--outline": outline === true
            }
        )}>
            {children}
        </button>
    )
}

export default Button
