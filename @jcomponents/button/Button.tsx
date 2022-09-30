import React from 'react';
import { Component, CSSProperties } from 'react';
import './button.css';

type ButtonProps={
    children?: any;
    color?: any;
    [key: string]: any;
};

export default class Button extends Component<ButtonProps> {
    constructor(props) {
        super(props);
    }

    render() { // Regular <Button>
        const hasButtonIcon: boolean=(()=>{ //one of the children has a this.Icon class
            let triggered=false; //triggered output
            function traverse(el) {
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
        const validJColors: string[]=['jred', 'jyellow', 'jgreen', 'jblue'];
        const validColor: boolean=this.props.color && validJColors.includes(this.props.color.toLowerCase());

        const style: CSSProperties=validColor ? {} : { backgroundColor: this.props.color }; //use CSS color if color is not valid color
        if (hasButtonIcon) {
            style.display='inline-flex';
            style.alignItems='center';
            style.cursor='pointer';
            style.gap=10;
        }

        return (<button
            style={style}
            className={validColor ? `jcomponents__button ${this.props.color}` : 'jcomponents__button'}
            {...this.props}
        >
            {this.props.children}
        </button>);
    }
    
    static Icon: string='jcomponents__button__icon'; // Button.Icon is a className

}
