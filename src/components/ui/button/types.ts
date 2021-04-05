export interface ButtonProps {
    type: "button" | "submit" | "reset";
    disabled?: boolean;
    value?: string;
    text: string;
    onClick?: () => void;
}