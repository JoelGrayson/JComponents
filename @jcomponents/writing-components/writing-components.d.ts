/// <reference types="react" />
import 'katex/dist/katex.min.css';
export declare function Citation({ number }: {
    number: string | number;
}): JSX.Element;
export declare function Footnote({ number, children }: {
    number: string | number;
    children: any;
}): JSX.Element;
export declare function BU({ children }: any): JSX.Element;
export declare function P({ noindent, ...props }: {
    noindent?: boolean;
    [key: string]: any;
}): JSX.Element;
export declare function H2({ children, ...props }: any): JSX.Element;
export declare function TeX({ children }: {
    children: string;
}): JSX.Element;
export declare function HangingIndent({ children }: {
    children: any;
}): JSX.Element;
