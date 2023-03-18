/// <reference types="react" />
export default function Resizer({ //draggable column
width, setWidth, //%
draggingDirection, thickness, //px
backgroundColor }: {
    width: number;
    setWidth: Function;
    draggingDirection?: 'left-right' | 'up-down';
    thickness: number;
    backgroundColor: string;
}): JSX.Element;
