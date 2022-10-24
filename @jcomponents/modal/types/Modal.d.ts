declare module '@jcomponents/modal' {
    import React from 'react';

    export default function Modal(props: {
        open: boolean;
        setOpen: Function;
        children: any;
        opacity: number | undefined;
        [x: string]: any
    }): JSX.Element;
}
