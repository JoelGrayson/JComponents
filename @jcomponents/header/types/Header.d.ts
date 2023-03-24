declare module '@jcomponents/header' {
    import React from 'react';
    
    export default function Header({ maxWidth=800, color, ...props }: {
        maxWidth?: number | 'none';
        color: string | { from: string; to: string; };
        [key: string]: any;
    }): JSX.Element
}
