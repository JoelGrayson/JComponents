import React, { useState, useEffect } from 'react';
import Button from '@jcomponents/button';

export default class Nav extends React.Component<{ gap?: number; [x: string]: any }, any> {
    render(): JSX.Element { //<Nav>
        const gap=this.props.gap ?? 4;
        
        return (<nav>
            <ul style={{
                display: 'flex',
                padding: 0,
                gap
            }}>
                {this.props.children}
            </ul>
        </nav>);
    }

    static Item=function(props: { //<Nav.Item>
        children: any;
        href?: string;
        Link?: any; //next/link
        target?: '_blank' | '_self' | '_parent' | '_top' | string;
        [key: string]: any;
    }): JSX.Element {
        const [btnColor, setBtnColor]=useState<'jnone' | 'jyellow'>('jnone'); //if is current page, set to jyellow. Has to be 'jnone' so it is not null
        const href=props.href ?? '#';
        const Link=props.Link ?? null;

        useEffect(()=>{
            if (href===window.location.pathname)
                setBtnColor('jyellow');
        }, []);
        
        if (!Link)
            return (<li style={{padding: 0, listStyleType: 'none'}}>
                <a href={href} target={props.target}>
                    <Button color={btnColor}>{props.children}</Button>
                </a>
            </li>);
        else
            return (<li style={{padding: 0, listStyleType: 'none'}}>
                <Link href={href} target={props.target}>
                    <Button color={btnColor}>{props.children}</Button>
                </Link>
            </li>);
    }
}
