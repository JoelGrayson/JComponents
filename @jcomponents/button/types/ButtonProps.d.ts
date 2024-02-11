import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children?: any;
    /**
     * @description Color of button. Can be 'jred' | 'jyellow' | 'jgreen' | 'jblue' or any other valid HTML button color
     */
    color?: any;
    /**
     * @description Size of button
     */
    size?: 'normal' | 'large' | 'small';
    /**
     * @description Text to be copied when button clicked
     */
    copy?: string | undefined | null;
}
