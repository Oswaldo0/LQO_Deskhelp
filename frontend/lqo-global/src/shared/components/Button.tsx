import React from 'react';

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
}

export const Button= ({ label, onClick, variant= 'primary', disabled = false}: ButtonProps)=>{
    const baseStyles = "px-4 py-2 rounded font-medium transition-colors";
    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-300 text-gray-700 hover:bg-gray-400",
    }

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
    <button
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]}`}
    >
        {label}
    </button>
);

};

