import { TextAreaWrapperContent } from "./styles";

type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextAreaLabelProps extends TextAreaProps {
    label: string
}

export function TextArea({ label, ...props }: TextAreaLabelProps) {
    return (
        <TextAreaWrapperContent>
            <label htmlFor={label}>{label}</label>
            <textarea {...props} />
        </TextAreaWrapperContent>
    )
}