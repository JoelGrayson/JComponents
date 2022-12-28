declare module '@jcomponents/nav' {
    import React from "react";

    export default class Nav extends React.Component<{ gap?: number; [x: string]: any }, any> {
        static Item: (props: {
            [key: string]: any;
            children: any;
            href?: string | undefined;
            target?: '_blank' | '_self' | '_parent' | '_top' | string;
            Link?: any;
        }) => JSX.Element;
        render(): JSX.Element;
    }
}
