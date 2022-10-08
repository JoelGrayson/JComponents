declare module '@jcomponents/container' {
    import React from 'react';
    
    export default function Container({children, ...props}: { children: any, [key: string]: value }): JSX.Element;
}