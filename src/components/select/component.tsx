import { ReactNode } from "react";
import { SelectWrapperContent } from "./styles";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

interface SelectLabelProps extends SelectProps {
    label: string
    children: ReactNode
}

export function Select({ label, children, ...props }: SelectLabelProps) {
    return (
        <SelectWrapperContent>
            <label htmlFor={label}>{label}</label>
            <select {...props} defaultValue='selecione' >
                <>
                    <option value="selecione" disabled>Selecione</option>
                    {children}
                </>
            </select>
        </SelectWrapperContent>
    )
}