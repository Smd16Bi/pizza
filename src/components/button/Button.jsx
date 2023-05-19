import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';


const Button = ({className,outline,children,onClick}) => {
    return (
        <button onClick={onClick} className={classNames("button", className,
            {
                "button--outline": outline === true
            }
        )}>
            {children}
        </button>
    )
}



export default Button
