import React from 'react';
import tinycolor from 'tinycolor2';
// const tinycolor=require('tinycolor2');

export default function Header(props) {
    let maxWidth=props.maxWidth || 800;

    const buff=tinycolor(props.color || '#a1c7ef');;
    const color1=buff.toString();
    const color2=buff.lighten(8).toString();

    return (<header style={{
        height: '100px',
        width: '100%',
        // backgroundImage: `linear-gradient(0, '#96d2ab', '#abefc3')`
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
            width: 'calc(100% - 70px)',
            maxWidth
        }}>
            {props.children}
        </div>
    </header>);
}