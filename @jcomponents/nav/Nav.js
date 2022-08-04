import React, { useState, useEffect } from 'react';
import Button from '@jcomponents/button';

export function Nav({children}) {
    return (<nav>
        <ul style={{
            display: 'flex',
            listStyleType: 'none',
            padding: 0
        }}>
            {children}
        </ul>
    </nav>);
}

export function NavItem({children, href='#'}) {
    const [isCurrentPage, setIsCurrentPage] = useState(false);
    
    useEffect(() => {
        if (typeof window!=="undefined")
            setIsCurrentPage(href===window.location.pathname);
    }, []);
    
    return (<li style={{padding: 0}}>
        <a href={href}>
            <Button color={isCurrentPage ? 'jyellow' : ''}>{children}</Button>
        </a>
    </li>);
}
