import React from 'react';
import { useState, useEffect } from 'react';
import './modal.css';
import './icon-close.css';

export default function Modal({open, setOpen, children, opacity=0.5, width, unclosable=false, ...props}) {
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

    // Escape keyboard listener
    const onlySetOpenIfNotUnclosable=()=>!unclosable && setOpen(false);
    const closeModalOnEscapeKey=e=>e.key==='Escape' && onlySetOpenIfNotUnclosable(false);
    useEffect(()=>{
        document.addEventListener('keydown', closeModalOnEscapeKey);
        return ()=>document.removeEventListener('keydown', closeModalOnEscapeKey); //component unmounting
    }, []);
    
    return (<>
        { open && (<>
            <div className='jcomponents__modal-background' style={{
                backgroundColor: `rgba(0.1, 0.1, 0.1, ${opacity})`
            }} onClick={_=>onlySetOpenIfNotUnclosable(false)}/> {/* Clicking outside of a modal closes it */}
            <div className='jcomponents__modal-container'>
                <div className='jcomponents__modal'
                    style={{
                        maxWidth: width ? 'none' : props.maxWidth || "500px", //use width or maxWidth or 500px
                        width: width || 'auto',
                        top: `${offset.y}px`,
                        left: `${offset.x}px`,
                    }}
                    onMouseDown={_=>document.addEventListener('mousedown', mouseDownListener)}
                >
                    { !unclosable && <span className='icon-close' onClick={_=>onlySetOpenIfNotUnclosable(false)} /> }
                    <div className='jcomponents__modal-content' onClick={e=>e.stopPropagation()} >
                        {children}
                    </div>
                </div>
            </div>
        </>)}
    </>);
}
