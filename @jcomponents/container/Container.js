import React from 'react';
import jcolorize from 'jcolorize';

export default function Container({children, color=undefined, maxWidth=800, ...props}) {
    return <div style={{
        maxWidth,
        width: '95%',
        margin: '0 auto', //centers itself
        position: 'relative',
        backgroundColor: jcolorize(color)
    }} {...props}>{children}</div>;
}
