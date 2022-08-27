declare module '@jcomponents/button' {
    export default function Button({ children, color, ...props }: {
        children?: any;
        color?: any;
        [x: string]: any;
    }): JSX.Element
}
