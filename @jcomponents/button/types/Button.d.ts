declare module '@jcomponents/button' {
    import { Component } from 'react';
    export type ButtonProps={
        children?: any;
        color?: any;
        [key: string]: any;
    };
    
    export default class Button extends Component<ButtonProps> {
        render(): JSX.Element

        static Puffy: ({children, color='jblue', ...props}: {
            color?: string;
            children?: any;
            [key: string]: any;
        })=>JSX.Element
    }
}
