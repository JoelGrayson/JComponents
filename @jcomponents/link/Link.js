import React, { useState } from 'react';
import './link.css';

// Rainbow text
// Props: 'href' is same as 'to'

// Example implementations:
// <Link href='https://www.riverdale.edu'>Riverdale</Link>
// <Link href='https://www.riverdale.edu' hidename>Riverdale</Link>

// Functional:
const getURL=i=>(i.slice(0, 7)==='http://'||i.slice(0, 8)==='https://') ? new URL(i) : new URL(`https://${i}`);
const getName=url=>getURL(url.trim()).host.match(/^(?:www\.)?(.*)\/?/)[1]; //https://joelgrayson.com/about -> joelgrayson.com

// // Testing
// getName('www.joelgrayson.com');
// getName('amazon.com/about');
// getName('aws.amazon.com/about');
// getName('console.cloud.google.com');


export default function Link({href, hidename=false, target='_blank', children, ...props}) {
    const [hovering, setHovering]=useState(true);
    const [pos, setPos]=useState({x: 0, y: 0});
    const name=props.name ?? getName(href);
    
    function mouseEnterListener() {
        setHovering(true);
        document.addEventListener('mousemove', mouseMoveListener);
    }
    function mouseMoveListener(e) {
        setPos({
            x: e.pageX,
            y: e.pageY
        });
    }
    function mouseLeaveListener() {
        setHovering(false);
        document.removeEventListener('mousemove', mouseMoveListener);
    }
    
    return (<span className='jcomponents-link'>
        <a
            {...{href, target}}
            {...props}
            onMouseEnter={mouseEnterListener}
            onMouseLeave={mouseLeaveListener}
        >
            {children}
        </a>
        {
            hovering && 
            <div className='jcomponents-link__name' style={{
                position: 'absolute',
                top: `calc(${pos.y}px - 1.8rem)`,
                left: pos.x,
            }}>
                {(! hidename) && name}
            </div>
        }
    </span>);
}

