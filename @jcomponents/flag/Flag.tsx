import React, { useEffect, useRef } from 'react';

const poleWidth=5;
const poleLeftOffset=3;

export default function Flag({ src, size=141, ...props }: { src: string; size?: number; [key: string]: any }) {
    const canvasRef=useRef<HTMLCanvasElement>(null);

    useEffect(()=>{
        const canvas=canvasRef.current;
        const c=canvas?.getContext('2d');
        if (!c) return;

        // Adapted from http://bucarotechelp.com/design/jseasy/81071103.asp
        const pattern=new Image();
        pattern.src=src;
        
        var ph=pattern.height;
        
        const intervalId=setInterval(()=>{
            var iw=pattern.width;
            var ih=pattern.height;
            c.clearRect(0, 0, size*2, size*2);

            if (ph<=0)
                ph=ih;
            else
                ph-=20;

            const waveHeight=4, frequency=18, verticalOffset=10;

            c.fillStyle='#303030';
            c.strokeStyle='#303030';
            c.rect(poleLeftOffset, verticalOffset-5, poleWidth, size*.85);
            c.fill();
            // circle
            c.strokeStyle='#dbaf42';
            c.fillStyle='#dbaf42';
            c.beginPath();
            c.arc(poleLeftOffset+poleWidth/2, verticalOffset-5, 4, 0, 2*Math.PI);
            c.stroke();
            c.fill();

            for (var x=0; x<iw; x++) {
                var y=waveHeight*Math.sin((x+ph)/frequency)+verticalOffset;
                c.drawImage(pattern, x, 0, 1, ih, x+poleLeftOffset+poleWidth, y, 1, ih);
            }
        }, 80);

        return ()=>clearInterval(intervalId);
    }, [src]);
    
    return <canvas
        style={{
            padding: '30px 33px',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            paddingBottom: '0',
            zIndex: 1,
            ...props.style
        }}
        width={size+2*poleWidth+poleLeftOffset} height={size*.85}
        ref={canvasRef} {...props}
    />;
}

