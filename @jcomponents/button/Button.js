import React from 'react';
import './jcomponent-button.css';

export default function Button({children, color, ...props}) {
    // Color from the j defaults or any CSS valid color
    const validJColors=['jred', 'jyellow', 'jgreen', 'jblue'];
    if (validJColors.includes(color.toLowerCase()))
        return (<button className={`jcomponent-button ${color}`} {...props}>
            {children}
        </button>);
    else
        return (<button className='jcomponent-button' style={{
            backgroundColor: color
        }} {...props}>
            {children}
        </button>);
}
