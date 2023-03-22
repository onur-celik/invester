import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
type DraggableProps = {
    children: React.ReactNode;
    extraStyle?: object;
    coordinates: {
        x: number;
        y: number;
    };
};
export default function Draggable({
    children,
    extraStyle,
    coordinates,
}: DraggableProps) {
    const draggableRef = useRef<HTMLDivElement | null>(null);
    type Position = {
        x: number;
        y: number;
    };
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

    useEffect(() => {
        setPosition({
            x: coordinates.x,
            y: coordinates.y,
        });
    }, [extraStyle]);

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
        // event.preventDefault();
        const target = event.target as HTMLDivElement;
        // setPosition({
        //     x: event.clientX - target.clientWidth / 2,
        //     y:
        //         event.clientY -
        //         target?.offsetTop -
        //         (target.clientHeight + target.clientHeight / 2),
        // });
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (event: MouseEvent) => {
        const target = draggableRef.current as HTMLDivElement;
        const x = event.clientX - target.clientWidth / 2;
        const y = event.clientY - 50;
        // if (x >= 10 && y >= 10) setPosition({ x, y });
    };

    const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    };

    return (
        <div
            ref={draggableRef}
            data-test={Date.now().toString()}
            className="Draggable"
            onMouseDown={handleMouseDown}
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`,
            }}
        >
            {children}
        </div>
    );
}
