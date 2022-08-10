import React from 'react';
import './button.css';

export default function Button({children, color, ...props}) {
    // Color from the j defaults or any CSS valid color
    const validJColors=['jred', 'jyellow', 'jgreen', 'jblue'];
    const validColor=color && validJColors.includes(color.toLowerCase());

    const style=validColor ? {} : { //use CSS color if color is not valid color
        backgroundColor: color
    };
    
    return (<button
        className={validColor ? `jcomponent-button ${color}` : 'jcomponent-button'}
        style={style}
        {...props}
    >
        {children}
    </button>);
}
