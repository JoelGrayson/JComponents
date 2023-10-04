import React from 'react';
export default function Flag({ src, selected, size, ...props }: {
    src: string;
    selected: boolean;
    size?: number;
    [key: string]: any;
}): React.JSX.Element;
