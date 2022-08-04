import React from 'react';

export default function Container({children, ...props}) {
    const maxWidth=props.maxWidth ?? 800;
    return <div {...props} style={{
        maxWidth,
        width: '95%',
        margin: '0 auto' //centers itself
    }}>{children}</div>;
}
