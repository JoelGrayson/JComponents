declare module '@jcomponents/nav' {
    import React from "react";

    export default class Nav extends React.Component<{ gap?: number; [x: string]: any }, any> {
        static Item: (props: {
            [key: string]: any;
            children: any;
            href?: string | undefined;
            Link?: any;
        }) => JSX.Element;
        render(): JSX.Element;
    }

    export default function Nav({ gap, ...props }: {
        gap?: number;
        [x: string]: any;
    }): JSX.Element
}
