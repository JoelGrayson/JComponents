declare module '@jcomponents/header' {
    export default function Header({ maxWidth, ...props }: {
        maxWidth?: number;
        [x: string]: any;
    }): JSX.Element
}
