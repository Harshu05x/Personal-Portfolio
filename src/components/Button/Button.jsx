import React from 'react';
import "./Button.css";
import { Bio } from '../../data/constants';

const Button = () => {

    return (
        <button
            onClick={() => window.open(Bio.resume)}
        >
            Check Resume
        </button>
    );
}

export default Button;