declare module '@jcomponents/container' {
    import React from 'react';
    
    export default function Container({children, color='', maxWidth, ...props}: { children: any; color?: string; maxWidth?: number; [key: string]: any; }): JSX.Element;
}