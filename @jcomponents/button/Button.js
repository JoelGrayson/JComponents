import React from 'react';
import './jcomponent-button.css';

export default function Button({children, color, ...props}) {
    // Color from the j defaults or any CSS valid color
    const validJColors=['jred', 'jyellow', 'jgreen', 'jblue'];
    const validColor=validJColors.includes(color.toLowerCase());
    return (<button
        className={validColor ? `jcomponent-button ${color}` : 'jcomponent-button'}
        style={{
            backgroundColor: validColor ? '' : color //if not valid Color, then use CSS color
        }}
        {...props}
    >
        {children}
    </button>);
}
