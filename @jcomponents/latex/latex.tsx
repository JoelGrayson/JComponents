import React from 'react';
import ReactLatex from 'react-latex';
import 'katex/dist/katex.min.css';

// Usage: <LaTeX>{String.raw` \frac{1}{2} `}</LaTeX>
export default function LaTeX({ children }: { children: string }) {
    return <ReactLatex>{`$$${children}$$`}</ReactLatex>;
}
