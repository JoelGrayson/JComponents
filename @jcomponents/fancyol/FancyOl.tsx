import React from "react";

export default function FancyOl({ children, spacing=5, color='white', backgroundColor='#1d2cf3', showLine=true }: { children: React.ReactNode; spacing?: number; color?: string; backgroundColor?: string; showLine?: boolean }) {
    const childrenArray=React.Children.toArray(children);

    return <div style={{
        display: 'grid',
        gridTemplateColumns: '32px 1fr'
    }}>
        {childrenArray.map((child, i)=>{
            return <React.Fragment key={i}>
                <div className="unstyled" style={{ position: 'relative' }}>
                    <div
                        style={{
                            borderRadius: '50%',
                            fontWeight: 700,
                            padding: '0.75rem',
                            height: '1.25rem',
                            width: '1.25rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color,
                            backgroundColor,
                        }}
                    >
                        <span style={{
                            position: 'relative',
                            top: 1.5,
                            zIndex: 1,
                        }}>{i+1}</span>

                        {/* After */}
                        { i!==childrenArray.length-1 && showLine && <div
                            className="after"
                            style={{
                                height: '100%',
                                width: '4px',
                                position: 'absolute',
                                backgroundColor,
                                top: '0.25px',
                            }}
                        /> }
                    </div>
                </div>
                <div className="unstyled" style={{ marginBottom: spacing }}>
                    {child}
                </div>
            </React.Fragment>;
        })}
    </div>;
}
