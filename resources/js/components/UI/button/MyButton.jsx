import React from 'react';
import ReactDOM from 'react-dom';
import classes from './MyButton.module.css';

const MyButton = ({children, ...props}) => {
    return (
            <button {...props} className={classes.myBtn}>
                {children}
            </button>
    );
}

export default MyButton;