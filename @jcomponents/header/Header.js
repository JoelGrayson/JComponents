import React from 'react';
import tinycolor from 'tinycolor2';
import './header.css';

export default function Header({maxWidth=800, ...props}) {
    const buff=tinycolor(props.color || '#a1c7ef');;
    const color1=buff.toString();
    const color2=buff.lighten(8).toString();

    return (<header className='jcomponents-header' style={{
        backgroundImage: `linear-gradient(0, ${color1}, ${color2})`
    }}>
        <div style={{ maxWidth }}>
            {props.children}
        </div>
    </header>);
}
