// @ts-check

declare module '@jcomponents/button' {
    import React from 'react';

    export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> { // Copied from ./ButtonProps.d.ts
        children?: any;
        color?: any;
        /**
         * @description Text to be copied when button clicked
         */
        copy?: string | undefined | null;
    }

    export default class Button extends React.Component<ButtonProps> {
        render(): JSX.Element;

        /** ClassName for the icon */
        static Icon: string;

        static Puffy: ({children, color='jblue', copy, ...props}: {
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
