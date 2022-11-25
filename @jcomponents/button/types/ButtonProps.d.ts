import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    children?: any;
    color?: any;
    /**
     * @description Text to be copied when button clicked
     */
    copy?: string | undefined | null;
}
