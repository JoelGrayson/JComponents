import React from 'react';
import { useState, useEffect } from 'react';
import './modal.css';
import './icon-close.css';

export default function Modal({open, setOpen, children, ...props}) {
    // <Moving>
    const [startingCursorPos, setStartingCursorPos]=useState({x: null, y: null}); //starting position when mouseDown
    const [cursorPos, setCursorPos]=useState({x: null, y: null}); //cursor's position
    const [offset, setOffset]=useState({x: 0, y: 0}); //position of the modal
    const [startingOffset, setStartingOffset]=useState({x: 0, y: 0}); //starting position of the modal

    // Start
    function mouseDownListener(e) {
        setStartingCursorPos({x: e.pageX, y: e.pageY});
        setStartingOffset(offset);

        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
    }

    // Update
    const mouseMoveListener=e=>setCursorPos({x: e.pageX, y: e.pageY});
    useEffect(()=>{
        setOffset({
            x: startingOffset.x+cursorPos.x-startingCursorPos.x, //diff between current & starting
            y: startingOffset.y+cursorPos.y-startingCursorPos.y
        });
    }, [cursorPos]);

    // End
    function mouseUpListener(e) {
        document.removeEventListener('mouseup', mouseUpListener);
        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mousedown', mouseDownListener);
    }
    // </>
    
    return (<>
        { open && (<>
            <div className='modal-background' onClick={_=>setOpen(false)}/> {/* Clicking outside of a modal closes it */}
            <div className='modal-container'>
                <div className='settings-modal'
                    style={{
                        maxWidth: props.maxWidth || "500px",
                        top: `${offset.y}px`,
                        left: `${offset.x}px`,
                    }}
                    onMouseDown={_=>document.addEventListener('mousedown', mouseDownListener)}
                >
                    <span className='icon-close' onClick={_=>setOpen(false)} />
                    <div className='settings-modal-content' onClick={e=>e.stopPropagation()} >
                        {children}
                    </div>
                </div>
            </div>
        </>)}
    </>);
}
