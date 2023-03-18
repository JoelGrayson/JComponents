import React, { useState, useEffect } from 'react';

export default function Resizer({ //draggable column
    width,
    setWidth, //%
    draggingDirection='left-right',
    thickness, //px
    backgroundColor //to match
}: { width: number; setWidth: Function; draggingDirection?: 'left-right' | 'up-down', thickness: number; backgroundColor: string }) {
    const draggingOrientation=draggingDirection==='left-right' ? 'X' : 'Y';

    const [startingCursorPos, setStartingCursorPos]=useState<number>(0);
    const [cursorPos, setCursorPos]=useState<number>(0);
    const [hovering, setHovering]=useState<boolean>(false);
    
    const [startingWidth, setStartingWidth]=useState<number>(width); //:: px
    const [startingOffset, setStartingOffset]=useState<number>(0); //how much to add to the width :: px
    
    // Start
    function mouseDownListener(e: any) {
        setStartingCursorPos(e[`page${draggingOrientation}`]);
        setCursorPos(e[`page${draggingOrientation}`]);
        setStartingOffset(0);
        setStartingWidth(width);

        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
    }
    // Update
    function mouseMoveListener(e: any) {
        setCursorPos(e[`page${draggingOrientation}`]);
    }
    useEffect(()=>{
        setWidth(startingWidth+startingOffset+cursorPos-startingCursorPos); //diff between current & starting
    }, [cursorPos, startingOffset, startingCursorPos, startingOffset]);

    // End
    function mouseUpListener(e: any) {
        setCursorPos(e[`page${draggingOrientation}`]);
        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
    }

    return <div
        style={{
            width: draggingDirection==='left-right' ? `${thickness}px` : undefined,
            height: draggingDirection==='up-down' ? `${thickness}px` : undefined,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: backgroundColor,
            cursor: draggingDirection==='left-right' ? 'col-resize' : 'row-resize'
        }}
        onMouseOver={_=>setHovering(true)}
        onMouseLeave={_=>setHovering(false)}
        onMouseDown={mouseDownListener}
    >
        <div style={
            draggingDirection==='left-right'
            ? {
                width: '4px',
                maxHeight: '230px',
                height: '50%',
                backgroundColor: hovering ? '#6b8099' : '#99aabe',
                borderRadius: '2px'
            }
            : {
                height: '4px',
                maxWidth: '230px',
                width: '50%',
                backgroundColor: hovering ? '#6b8099' : '#99aabe',
                borderRadius: '2px'
            }
        } />
    </div>;
}
