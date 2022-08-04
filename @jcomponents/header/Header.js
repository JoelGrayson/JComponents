import React from 'react';
import tinycolor from 'tinycolor2';

export default function Header(props) {
    let maxWidth=props.maxWidth || 800; //default maxWidth of 800px

    const buff=tinycolor(props.color || '#a1c7ef');;
    const color1=buff.toString();
    const color2=buff.lighten(8).toString();

    return (<header style={{
        height: '100px',
        width: '100%',
        backgroundImage: `linear-gradient(0, ${color1}, ${color2})`,
        borderBottom: '1px solid #8f8f8f',

        // Center
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: 'calc(100% - 70px)', //35px horizontal padding
            maxWidth
        }}>
            {props.children}
        </div>
    </header>);
}
