import React from 'react';

export function Citation({number}: { number: string | number }) {
    return <a href={`#footnote-${number}`} className='text-blue-700'>
        <sup id={`citation-${number}`}>
            [{number}]
        </sup>
    </a>;
}

export function Footnote({ number, children }: { number: string | number; children: any }) {
    return <div id={`footnote-${number}`} style={{
        fontSize: '.8em',
        textIndent: '4ch'
    }}>
        <a href={`#citation-${number}`}>
            <sup title='Return to point in text that cites this'>
                <span className='j_link nounderline'>[{number}]</span>
            </sup>
        </a>
        {children}
    </div>;
}

export function BU({children}: any) {
    return <span style={{fontFamily: 'AvenirMedium'}}>
        <u>{children}</u>
    </span>;
}

export function P({noindent, ...props}: {noindent?: boolean; [key: string]: any}) {
    return <p {...props} style={{
        paddingBottom: '.5em',
        lineHeight: '1.65rem',
        textIndent: !noindent ? '4ch' : '0',
        ...props.style
    }}></p>;
}

export function H2({children, ...props}: any) {
    return <h2 style={{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: '2rem',
        marginTop: '8px',
        marginBottom: '10px'
    }} {...props}>{children}</h2>;
}

export function HangingIndent({children}: {children: any}) {
    return <p style={{
        textIndent: '-4ch',
        paddingLeft: '4ch'
    }}>{children}</p>;
}
