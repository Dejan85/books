import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps {
    placeholder?: string;
    value?: string;
    onChange: (e) => void;
    type?: keyof DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    name: string;
    id?: string;
    onKeyPress?: (e) => void;
}