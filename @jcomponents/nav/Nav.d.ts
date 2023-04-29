import React from 'react';
export default class Nav extends React.Component<{
    gap?: number;
    [x: string]: any;
}, any> {
    render(): JSX.Element;
    static Item: ({ children, href, target, ...props }: {
        [key: string]: any;
        children: any;
        href?: string;
        target?: '_blank' | '_self' | '_parent' | '_top' | string;
    }) => JSX.Element;
}
