import React from 'react';
import tinycolor from 'tinycolor2';
import './header.css';

export default function Header({maxWidth=800, color, ...props}) {
    let topColor, bottomColor;
    if (!color || typeof color==='string') {
        const buff=tinycolor(color || '#a1c7ef');
        topColor=buff.toString();
        bottomColor=buff.lighten(8).toString();
    } else if (Array.isArray(color)) {
        topColor=color.from;
        bottomColor=color.to;
    }
    
    return (<header className='jcomponents-header' style={{
        backgroundImage: `linear-gradient(0, ${topColor}, ${bottomColor})`
    }}>
        <div style={{ maxWidth }}>
            {props.children}
        </div>
    </header>);
}
