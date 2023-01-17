import React from 'react';
declare function Dropdown({ title, children, openTitleWidth, closedTitleWidth, className, onClick, onChange, absoluteWhenOpen, width, ...props }: Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & {
    title?: any;
    children?: any;
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
