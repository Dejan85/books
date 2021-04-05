import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps {
    placeholder?: string;
    value?: string;
    onChange: (e: { target: { value: React.SetStateAction<string>; }; }) => void;
    type?: keyof DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    name: string;
    id?: string;
    onKeyPress?: (e: { key: string; }) => void;
}