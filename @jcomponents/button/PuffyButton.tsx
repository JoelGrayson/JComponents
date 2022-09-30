import React, { useState, CSSProperties } from 'react';
import tinycolor from 'tinycolor2';

type propsT={
    color?: string;
    children?: any;
    [key: string]: any;
};

export default function PuffyButton({children, color='jblue', ...props}: propsT): JSX.Element {
    const [hovered, setHovered]=useState<0 | 1>(0); //for :hover CSS state
    const [active, setActive]=useState<0 | 1>(0); //for :active CSS state

    const jColors: { [key: string]: string }={ //only for <Button.Puffy>
        'jblue': '#1a2df3', //default
        'jred': '#df2626',
        'jyellow': '#fcc33a',
        'jgreen': '#10c738',
        'jpurple': '#9e0ff1'
    };

    const btnColor=tinycolor(jColors[color] || color); //use jColors or the color itself
    const style: CSSProperties=({ color: '#fff', borderWidth: 0, borderRadius: 4, padding: '7px 11px', boxShadow: '1px 2px 3px 0px rgb(144, 144, 144, 46%)', transition: 'background-color .2s', fontWeight: 600, });

    return (<button
        onMouseEnter={_=>setHovered(1)}
        onMouseLeave={_=>setHovered(0)}
        onMouseDown={_=>setActive(1)}
        onMouseUp={_=>setActive(0)}
        style={{
            backgroundColor: btnColor.lighten(hovered*10 + active*7).toString(), //render style according to :hover or :active (hover lightens by 10, active lightens by 7 in addition)
            ...style
        }}
        {...props}
    >
        {children}
    </button>);
}
