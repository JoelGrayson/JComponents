import React from 'react';
import tinycolor from 'tinycolor2';
import './header.css';

export default function Header({maxWidth=800, color='#a1c7ef', ...props}) {
    let topColor, bottomColor;
    if (typeof color==='string') {
        const buff=tinycolor(color);
        topColor=buff.toString();
        bottomColor=buff.lighten(8).toString();
    } else if (typeof color==='object' && color.from && color.to) {
        topColor=color.from;
        bottomColor=color.to;
    }
    
    return <header className='jcomponents-header' style={{
        backgroundImage: `linear-gradient(${topColor}, ${bottomColor})`
    }}>
        <div style={{ maxWidth }}>
            {props.children}
        </div>
    </header>;
}

