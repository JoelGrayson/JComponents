import React, { useState } from 'react';
import { css } from '@emotion/css';
import jcolorize from './jcolorize';

// documentation: onChange, title

export default function Dropdown({ title, children, color='#ffd472', openTitleWidth, closedTitleWidth, className, onClick, onChange, absoluteWhenOpen, width, ...props }: Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onChange'> & { title?: any; children?: any; color?: string; openTitleWidth?: any; closedTitleWidth?: any; className?: string; onClick?: any; onChange?: (newValue: boolean)=>void; absoluteWhenOpen?: boolean; width?: any }, ref: any) { // if value is defined, changes value when dropdown selected changes. if no value and no setValue, title is not changed
    // <Clicking outside closes dropdown
    const [open, _setOpen]=useState<boolean>(false);
    const closeDropdown=()=>setOpen(false);
    const closeDropdownOnEscape=(e: any)=>(e.key==='Escape') && closeDropdown();

    function setOpen(newValue: boolean) {
        _setOpen(newValue);
        if (onChange)
            onChange(newValue);
        
        if (newValue) {
            document.addEventListener('click', closeDropdown); //close dropdown when clicking outside
            document.addEventListener('keydown', closeDropdownOnEscape);
        }
        if (!newValue) {
            document.removeEventListener('click', closeDropdown);
            document.removeEventListener('click', closeDropdownOnEscape);
        }
    }
    // >
    
    return <div onClick={e=>{
        e.stopPropagation();
        setOpen(!open);
        onClick?.(e);
    }} className={`${css`
        position: relative;
        user-select: none;
        z-index: 1;
        min-height: 40px;
    `} ${className ? className : ''}`} {...props}>
        <div className={css`
            border: 1px solid black;
            padding: .3rem 1rem;
            border-radius: .2rem;
            display: flex;
            align-items: center;
            gap: 1ch;
        
            cursor: pointer;
            position: ${absoluteWhenOpen ? 'absolute !important' : 'relative'};
            background-color: ${jcolorize(color)};
            &:hover { filter: brightness(0.85) saturate(1.4); }
            &:active { filter: brightness(0.8) saturate(1.4); }
        `}>
            <span className={css`
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                ${ width ? `width: ${width};` : '' }
                ${ closedTitleWidth && !open ? `width: ${closedTitleWidth};` : '' }
                ${ openTitleWidth && open    ? `width: ${openTitleWidth};` : '' }
            `}>{title}</span>
            <svg viewBox='0 0 10 10' width='10px' height='10px'> {/* arrow up/down for dropdown */}
                <path d={open ? 'M 0 10 L 5 0 L 10 10' : 'M 0 0 L 5 10 L 10 0'} fill='none' stroke='black' />
            </svg>
        </div>
        { open && <div className={css`
            cursor: pointer;
            position: absolute;
            background-color: ${jcolorize(color)};

            top: 2rem;
            left: 3px;
            display: flex;
            flex-direction: column;
            background-color: white;
        `}>
            {children}
        </div>}
    </div>;
}

function DropdownItem({ children, className, color='#fefefe', ...props }: { children?: any; className?: string; color?: string; } & React.HTMLAttributes<HTMLDivElement>, ref: any) {
    return <div className={`${css`
        width: 100%;
        border: 1px solid black;
        padding: .3rem .8rem;
        display: flex;
        gap: 1ch;
        background-color: ${jcolorize(color)};
        &:hover { filter: brightness(0.85) saturate(1.4); }
        &:active { filter: brightness(0.8) saturate(1.4); }
    `} ${className}`} {...props}>
        {children}
    </div>;
}

// exported as <Dropdown.Item> or <Item>
Dropdown.Item=React.forwardRef(DropdownItem);
export const Item=React.forwardRef(DropdownItem);
