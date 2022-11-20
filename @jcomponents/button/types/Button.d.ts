// @ts-check

declare module '@jcomponents/button' {
    import { Component } from 'react';

    export type ButtonProps={ // ./ButtonProps.d.ts
        children?: any;
        color?: any;
        /**
         * @description Text to be copied when button clicked
         */
        copy?: string | undefined | null;
        [key: string]: any;
    };

    export default class Button extends Component<ButtonProps> {
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
