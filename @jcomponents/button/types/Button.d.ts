declare module '@jcomponents/button' {
    type ButtonT=(props: {
        children?: any;
        color?: any;
        [key: string]: any;
    }) => JSX.Element;
    
    const Button: ButtonT;
    export default Button;
    export const Btn: ButtonT;
    export const ButtonIcon: ButtonT;
    export const BtnIcon: ButtonT;

    export const ButtonIconStyle: React.CSSProperties;
    export const BtnIconStyle: React.CSSProperties;
}
