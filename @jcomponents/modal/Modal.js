import React from 'react';
import './icon-close.css';

export default function Modal({open, setOpen, children, ...props}) {
    return (<>
        { open && (
            <>
                <div id='modal-background' onClick={_=>setOpen(false)}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0.1, 0.1, 0.1, 0.5)",
                        zIndex: 1
                    }}
                /> {/* Clicking outside of a modal closes it */}
                <div id='modal-container'
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <div id='settings-modal' style={{
                        position: "fixed",
                        width: "80%",
                        maxWidth: props.maxWidth || "500px",
                        height: "fit-content",
                        backgroundColor: "white",
                        zIndex: 2,
                        padding: "30px",
                        paddingBottom: "40px",
                        borderRadius: "1.4rem"
                    }}>
                        <span className='icon-close' onClick={_=>setOpen(false)} />
                        <div id='settings-modal-content'>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )}
    </>);
}
