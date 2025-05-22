import type { MouseEventHandler } from "react";

export interface ButtonProps{
    varient: "primary" | "secondary";
    size: "sm" | "md"  | "lg";
    bgColor: string;
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const buttonVarientsStyles = {
    primary: "rounded-md px-6 py-5",
    secondary: "rounded-full px-10 py-5",
    
};

const buttonSizeStyle = {
    sm: "py-6 px-8",
    md: "py-2 px-3",
    lg: "py-3 px-4",
};

const defaultStyles = "flex cursor-pointer flex justify-center items-center";

export const Button = ({varient, size, bgColor, text, onClick}:ButtonProps) => {
    
    return (
        <button
        onClick={onClick}
        className={`${buttonVarientsStyles[varient]} ${defaultStyles} ${buttonSizeStyle} ${size} ${bgColor}`}
        >
            {text}
        </button>
    )
}