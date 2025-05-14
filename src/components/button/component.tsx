import { ReactNode } from "react"
import { ApplicationButton } from "./styles"

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
type Variants = 'primary' | 'secondary' | 'success' | 'destructive'

interface AllButtonProps extends ButtonProps {
    variant: Variants
    children?: ReactNode
}

export function Button({variant,children, ...props }: AllButtonProps) {
    return (
        <ApplicationButton className={variant} {...props}>{children}</ApplicationButton>
    )
}