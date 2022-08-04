import React from 'react';
import './jcomponent-button.css';

export default function Button({children, color, ...props}) {
    // Color from the j defaults or any CSS valid color
    const validJColors=['jred', 'jyellow', 'jgreen', 'jblue'];
    const validColor=validJColors.includes(color.toLowerCase());

    const style=validColor ? false : {} //if valid color, ignore style attribute, else use CSS color
    
    return (<button
        className={validColor ? `jcomponent-button ${color}` : 'jcomponent-button'}
        style={style}
        {...props}
    >
        {children}
    </button>);
}
