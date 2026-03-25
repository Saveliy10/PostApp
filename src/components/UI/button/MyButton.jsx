import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({children, className = '', ...props}) => {
    const buttonClass = className ? `${classes.myBtn} ${classes[className] || className}` : classes.myBtn;
    return (
        <button {...props} className={buttonClass}>
            {children}
        </button>
    );
};

export default MyButton;