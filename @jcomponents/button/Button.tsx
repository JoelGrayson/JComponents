import React, { Component, CSSProperties, createRef, RefObject, MouseEvent as ReactMouseEvent } from 'react';
import PuffyButton from './PuffyButton';
import { ButtonProps } from './types/ButtonProps';
import './button.css';

type jcolor='jred' | 'jyellow' | 'jgreen' | 'jblue';
const validJColors: jcolor[]=['jred', 'jyellow', 'jgreen', 'jblue'];

export default class Button extends Component<ButtonProps, {}> {
    constructor(props) {
        super(props);
    }

    render() { // Regular <Button>
        const hasButtonIcon: boolean=(()=>{ //one of the children has a this.Icon class
            let triggered=false; //triggered output
            function traverse(el: any) {
                if (el instanceof Array) //array of els -> traverse through each
                    el.forEach(traverse);
                else { //single el
                    if (el?.props?.className===Button.Icon) //see if an element is triggered
                        triggered=true;
                    if (el?.props?.children) //also traverse its children
                        traverse(el.props.children);
                }
            }
            traverse(this.props.children);
            return triggered;
        })();

        // Color from the j defaults or any CSS valid color
        const validJColor: boolean=this.props.color && validJColors.includes(this.props.color.toLowerCase());

        const style: CSSProperties=validJColor ? {} : { backgroundColor: this.props.color }; //use CSS color if color is not validJColor
        if (hasButtonIcon) {
            style.display='inline-flex';
            style.alignItems='center';
            style.cursor='pointer';
            style.gap=10;
        }
        switch (this.props.size) {
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
            if (this.props.copy)
                window.navigator.clipboard.writeText(this.props.copy); //if string exists, copy handler
            this.props.onClick?.(e); //execute user's onClick handler as well
        };
        
        return <button
            {...this.props}
            style={{...(this.props?.style), ...style}} //allow user to input styles
            className={(validJColor ? `jcomponents__button ${this.props.color}` : 'jcomponents__button')+' '+this.props.className}
            onClick={onClickHandler}
            type='button'
        >
            {this.props.children}
        </button>;
    }

    static readonly Icon: string='jcomponents__button__icon'; // Button.Icon is a className

    // <Button.Puffy> is an element
    static Puffy=PuffyButton;
}
