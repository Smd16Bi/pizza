import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types';


const Button = ({onClick, className,outline,children}) => {
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

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button
