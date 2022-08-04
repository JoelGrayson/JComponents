import React from 'react';

export default function JContainer({maxWidth, children, ...props}) {
    return <div {...props}>{children}</div>;
}
