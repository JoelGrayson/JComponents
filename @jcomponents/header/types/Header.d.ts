declare module '@jcomponents/header' {
    import React from 'react';
    
    export default function Header({ maxWidth=800, ...props }: {
        maxWidth?: number | 'none';
        [key: string]: any;
    }): JSX.Element
}
