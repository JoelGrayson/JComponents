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
