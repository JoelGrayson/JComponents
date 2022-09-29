import React from 'react';
import './button.css';

export default function Button({children, color=null, ...props}) {
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

export const Btn=Button; //alias to Button

export function ButtonIcon({children, color, ...props}) { //use in conjunction with ButtonIconStyle
    return (<Button
        style={{display: 'inline-flex', alignItems: 'center', cursor: 'pointer', gap: 10}}
        color={color} {...props}
    >{children}</Button>);
}
/*
Usage:
<ButtonIcon>
    <svg style={ButtonIconStyle} xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'><path fill='#dc4c2c' d='M8,24c0,9.941,8.059,18,18,18s18-8.059,18-18H26H8z'/><path fill='#f7a278' d='M26,6v18h18C44,14.059,35.941,6,26,6z'/><path fill='#c06346' d='M26,6C16.059,6,8,14.059,8,24h18V6z'/><path fill='#9b341f' d='M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z'/><path fill='#fff' d='M14.673,19.012H10v10h2.024v-3.521H14.3c1.876,0,3.397-1.521,3.397-3.397v-0.058 C17.697,20.366,16.343,19.012,14.673,19.012z M15.57,22.358c0,0.859-0.697,1.556-1.556,1.556h-1.99v-3.325h1.99 c0.859,0,1.556,0.697,1.556,1.556V22.358z'/></svg>
    <span>Download Presentation</span>
</ButtonIcon>
*/

export const ButtonIconStyle={height: 40, maxWidth: 100};

export const BtnIcon=ButtonIcon;
export const BtnIconStyle=ButtonIconStyle;

