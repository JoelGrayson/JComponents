import React from 'react';
import './modal.css';
import './icon-close.css';

export default function Modal({open, setOpen, children, ...props}) {
    return (<>
        { open && (
            <>
                <div className='modal-background' onClick={_=>setOpen(false)}/> {/* Clicking outside of a modal closes it */}
                <div className='modal-container'>
                    <div className='settings-modal'
                        style={{
                            maxWidth: props.maxWidth || "500px",
                        }}
                        onClick={e=>{
                            console.log(e);
                        }}
                    >
                        <span className='icon-close' onClick={_=>setOpen(false)} />
                        <div className='settings-modal-content' onClick={e=>e.stopPropagation()}>
                            {children}
                        </div>
                    </div>
                </div>
            </>
        )}
    </>);
}
