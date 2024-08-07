import React, { CSSProperties, MouseEvent as ReactMouseEvent, ButtonHTMLAttributes } from 'react';
import './button.css';

type jcolor='jred' | 'jyellow' | 'jgreen' | 'jblue';
const validJColors: jcolor[]=['jred', 'jyellow', 'jgreen', 'jblue'];

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: any;
    /**
     * @description Color of button. Can be 'jred' | 'jyellow' | 'jgreen' | 'jblue' or any other valid HTML button color
     */
    color?: any;
    /**
     * @description Size of button
     */
    size?: 'normal' | 'large' | 'small';
    /**
     * @description Text to be copied when button clicked
     */
    copy?: string | undefined | null;
}

export default function Button(props: ButtonProps) {
    const hasButtonIcon: boolean=(()=>{ //one of the children has a this.Icon class
        let triggered=false; //triggered output
        function traverse(el: any) {
            if (el instanceof Array) //array of els -> traverse through each
                el.forEach(traverse);
            else { //single el
                if (el?.props?.className===Icon) //see if an element is triggered
                    triggered=true;
                if (el?.props?.children) //also traverse its children
                    traverse(el.props.children);
            }
        }
        traverse(props.children);
        return triggered;
    })();

    // Color from the j defaults or any CSS valid color
    const validJColor: boolean=props.color && validJColors.includes(props.color.toLowerCase());

    const style: CSSProperties=validJColor ? {} : { backgroundColor: props.color }; //use CSS color if color is not validJColor
    if (hasButtonIcon) {
        style.display='inline-flex';
        style.alignItems='center';
        style.cursor='pointer';
        style.gap=10;
    }
    switch (props.size) {
        case 'small':
            style.padding='0px 3px';
            style.fontSize='0.8em';
            break;
        case 'normal':
            style.padding='2px 7px';
            break;
        case 'large':
            style.padding='5px 10px';
            break;
        default:
            style.padding='2px 7px';
    }

    // Copy
    const onClickHandler=(e: ReactMouseEvent<HTMLButtonElement, MouseEvent>)=>{
        if (props.copy)
            window.navigator.clipboard.writeText(props.copy); //if string exists, copy handler
        props.onClick?.(e); //execute user's onClick handler as well
    };

    return <button
        {...props}
        style={{...(props?.style), ...style}} //allow user to input styles
        className={validJColor ? `jcomponents__button ${props.color}` : 'jcomponents__button'}
        onClick={onClickHandler}
    >
        {props.children}
    </button>;
}


export const Icon='jcomponents__button__icon'; // Button.Icon is a className

