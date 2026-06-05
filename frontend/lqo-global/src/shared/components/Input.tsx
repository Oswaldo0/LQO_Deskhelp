import React from "react";

interface InputProps {
    placeholder?: string;
    onChange: (value: string) => void; //Capturamos lo que el usuario escribe|
}

export const Input = ({ placeholder = "¿Cuál es su problema?", onChange }: InputProps) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };
    return (
        <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange} //cuando escribe llamamos a nuestra función interna que traduce en un string
        className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    );
};