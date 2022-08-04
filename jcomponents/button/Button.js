import React from 'react';
import './jcomponent-button.css';

export default function Button({children, ...props}) {
    return (<button className='jcomponent-button' {...props}>{children}</button>);
}
