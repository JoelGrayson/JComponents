/// <reference types="react" />
declare module '@jcomponents/modal' {
    export default function Modal(props: {
        open: boolean;
        setOpen?: Function;
        children?: any;
        opacity?: number;
        width?: string | number;
        maxWidth?: false | string | number;
        unclosable?: boolean;
        [x: string]: any
    }): JSX.Element;
}
