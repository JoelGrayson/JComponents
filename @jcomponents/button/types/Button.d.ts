// @ts-check

declare module '@jcomponents/button' {
    import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

    export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { // Copied from ./ButtonProps.d.ts
        children?: any;
        /**
         * @description Color of button. Can be 'jred' | 'jyellow' | 'jgreen' | 'jblue' or any other valid HTML button color
         */
        color?: any;
        /**
         * @description Size of button
         */
        jsize?: 'normal' | 'large' | 'small';
        /**
         * @description Text to be copied when button clicked
         */
        copy?: string | undefined | null;
    }
    
    export default class Button extends React.Component<ButtonProps> {
        render(): JSX.Element;

        /** ClassName for the icon */
        static Icon: string;

        static Puffy: ({children, color, copy, ...props}: {
            children?: any;
            color?: any;
            /**
             * @description Text to be copied when button clicked
             */
            copy?: string | undefined | null;
            [key: string]: any;
        })=>JSX.Element;
    }
}
