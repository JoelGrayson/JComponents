import { Component } from 'react';
import { ButtonProps } from '../Button';

declare module '@jcomponents/button' {
    export default class Button extends Component<ButtonProps> {
        render(): JSX.Element

        static Puffy: ({children, color='jblue', ...props}: {
            color?: string;
            children?: any;
            [key: string]: any;
        })=>JSX.Element
    }
}
