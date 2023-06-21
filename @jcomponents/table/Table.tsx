import React from 'react';
import { css } from '@emotion/css';

export default function Table({ children }: { children: any }) {
    return <table className={css`
        border: 1px solid black;
        border-collapse: collapse;

        tr, td, th {
            border: 1px solid #000;
        }

        td, th {
            padding: 2px 7px;
        }

        th {
            background-color:rgba(0, 0, 0, 0.1);
            font-weight: bold;
        }
        
        td:hover {
            transition-duration: 0s;
            background-color: rgba(0, 0, 0, 0.3); //darken whatever the base color is
        }
    `}>
        {children}
    </table>;
}

