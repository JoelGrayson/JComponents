import React, { useState, useEffect } from 'react';
import Button from '@jcomponents/button';

export default class Nav extends React.Component<{ gap?: number; [x: string]: any }, any> {
    static Item=function(props: {
        children: any;
        href?: string;
        Link?: any; //next/link
        [key: string]: any;
    }) {
        const [isCurrentPage, setIsCurrentPage] = useState(false);
        const href=props.href ?? '#'
        const Link=props.Link ?? null

        useEffect(()=>{
            if (typeof window!=='undefined')
                setIsCurrentPage(href===window.location.pathname);
        }, []);
        
        if (!Link)
            return (<li style={{padding: 0, listStyleType: 'none'}}>
                <a href={href}>
                    <Button color={isCurrentPage ? 'jyellow' : ''}>{props.children}</Button>
                </a>
            </li>);
        else
            return (<li style={{padding: 0, listStyleType: 'none'}}>
                <Link href={href}><a>
                    <Button color={isCurrentPage ? 'jyellow' : ''}>{props.children}</Button>
                </a></Link>
            </li>);
    }

    render() {
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
}

/*
<Nav>
    <Nav.Item>Hi</Nav.Item>
    ...
</Nav>
*/
