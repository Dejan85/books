import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export interface InputProps {
    placeholder?: string;
    value?: keyof DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    onChange: () => void;
    type?: keyof DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    name: string;
    id?: string;
}