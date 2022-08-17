import React, { useState, useEffect } from 'react';
import Button from '@jcomponents/button';

export function Nav({gap=4, children, ...props}) {
    return (<nav>
        <ul style={{
            display: 'flex',
            padding: 0,
            gap
        }}>
            {children}
        </ul>
    </nav>);
}

export function NavItem({children, href='#', Link=null}) {
    const [isCurrentPage, setIsCurrentPage] = useState(false);
    
    useEffect(()=>{
        if (typeof window!=='undefined')
            setIsCurrentPage(href===window.location.pathname);
    }, []);
    
    if (Link==null)
        return (<li style={{padding: 0, listStyleType: 'none'}}>
            <a href={href}>
                <Button color={isCurrentPage ? 'jyellow' : ''}>{children}</Button>
            </a>
        </li>);
    else
        return (<li style={{padding: 0, listStyleType: 'none'}}>
            <Link href={href}><a>
                <Button color={isCurrentPage ? 'jyellow' : ''}>{children}</Button>
            </a></Link>
        </li>);
}
