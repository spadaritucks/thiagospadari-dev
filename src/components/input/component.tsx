import { InputWrapperContent } from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

interface InputLabelProps extends InputProps {
    label: string
}

export function Input({ label, ...props }: InputLabelProps) {
    return (
        <InputWrapperContent>
            <label htmlFor={label}>{label}</label>
            <input {...props} />
        </InputWrapperContent>
    )
}