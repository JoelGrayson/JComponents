import React from "react";
export default function FancyOl({ children, spacing, color, backgroundColor, showLine }: {
    children: React.ReactNode;
    spacing?: number;
    color?: string;
    backgroundColor?: string;
    showLine?: boolean;
}): React.JSX.Element;
