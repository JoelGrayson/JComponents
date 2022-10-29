declare module '@jcomponents/link' {
    import React from 'react';

    export default function Link({ href, hidename, target, children, ...props }: {
        [x: string]: any;
        href: any;
        hidename?: boolean | undefined;
        target?: string | undefined;
        children: any;
    }): JSX.Element;
}
