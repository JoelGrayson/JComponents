import React, { useState, useEffect } from 'react';
import Button from '@jcomponents/button';

export default class Nav extends React.Component<{ gap?: number; [x: string]: any }, any> {
    render(): JSX.Element { //<Nav>
        const gap=this.props.gap ?? 4;
        
        return <nav>
            <ul style={{
                display: 'flex',
                padding: 0,
                gap
            }}>
                {this.props.children}
            </ul>
        </nav>;
    }

    static Item=function({children, href='#', target, ...props}: { //<Nav.Item>
        children: any;
        href?: string;
        target?: '_blank' | '_self' | '_parent' | '_top' | string;
        [key: string]: any;
    }): JSX.Element {
        const [btnColor, setBtnColor]=useState<'jnone' | 'jyellow'>('jnone'); //if is current page, set to jyellow. Has to be 'jnone' so it is not null

        useEffect(()=>{
            if (href===window.location.pathname)
                setBtnColor('jyellow');
        }, []);
        
        return <li style={{padding: 0, listStyleType: 'none'}}>
            <a className='unstyled' href={href} target={target} {...props}>
                <Button color={btnColor}>{children}</Button>
            </a>
        </li>;
    }
}
