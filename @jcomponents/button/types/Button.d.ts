declare module '@jcomponents/button' {
    type ButtonT=(props: {
        children?: any;
        color?: any;
        [key: string]: any;
    }) => JSX.Element;
    
    const Button: ButtonT;
    export default Button;
    export const Btn: ButtonT; //alias btn=button
    export const ButtonIcon: ButtonT;
    export const BtnIcon: ButtonT;

    export const ButtonIconStyle: React.CSSProperties;
    export const BtnIconStyle: React.CSSProperties;


    export const PuffyButton: HTMLButtonElement;
    export const PuffyBtn: HTMLButtonElement;
}
