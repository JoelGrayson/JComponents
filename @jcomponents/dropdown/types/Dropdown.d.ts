import React from 'react';
declare function Dropdown(props: Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
    title?: any;
    children?: any;
    color?: string;
    openTitleWidth?: any;
    closedTitleWidth?: any;
    className?: string;
    onClick?: any;
    onChange?: (newValue: boolean)=>void;
    absoluteWhenOpen?: boolean;
    width?: any;
}, ref: any): JSX.Element;
declare namespace Dropdown {
    var Item: any;
}
export default Dropdown;
export declare const Item: any;
