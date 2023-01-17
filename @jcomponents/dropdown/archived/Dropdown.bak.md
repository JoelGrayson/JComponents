```jsx
// OG from buseroo.com project

import React, { useState } from 'react';
import styles from './dropdown.module.css';

export default function Dropdown({ title, children, value, setValue, openTitleWidth, closedTitleWidth, className, onClick, absoluteWhenOpen, width, ...props }: Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> & { title?: any; children?: any; value?: any; setValue?: Function; openTitleWidth?: any; closedTitleWidth?: any; className?: string; onClick?: any; absoluteWhenOpen?: boolean; width?: any }, ref: any) { // if value is defined, changes value when dropdown selected changes. if no value and no setValue, title is not changed
    // <Clicking outside closes dropdown
    const [open, _setOpen]=useState<boolean>(false);
    function closeDropdown() {
        setOpen(false);
    }
    function closeDropdownOnEscape(e: any) {
        if (e.key==='Escape')
            closeDropdown();
    }
    function setOpen(newValue: boolean) {
        _setOpen(newValue);
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
    }} className={`relative select-none z-[1] min-h-[40px] ${className ? className : ''}`} {...props}>
        <div className={`${styles['visible-dropdown']} ${absoluteWhenOpen ? '!absolute' : ''}`}>
            <span className={`overflow-hidden whitespace-nowrap text-ellipsis ${openTitleWidth && open ? `w-[${openTitleWidth}]`: ''} ${closedTitleWidth && !open ? `w-[${closedTitleWidth}]` : ''}`}>{ title }</span>
            <svg viewBox='0 0 10 10' width='10px' height='10px'> {/* arrow up/down for dropdown */}
                <path d={open ? 'M 0 10 L 5 0 L 10 10' : 'M 0 0 L 5 10 L 10 0'} fill='none' stroke='black' />
            </svg>
        </div>
        { open && <div className={styles['hidden-dropdown']}>
            {children}
        </div>}
    </div>;
}

function DropdownItem({ children, className, ...props }: { children?: any; className?: string } & React.HTMLAttributes<HTMLDivElement>, ref: any) {
    return <div className={`${styles['list-item']} ${className}`} {...props}>
        {children}
    </div>;
}

// exported as <Dropdown.Item> or <Item>
Dropdown.Item=React.forwardRef(DropdownItem);
export const Item=React.forwardRef(DropdownItem);

```
