import { FormErrorSpan } from "./styles"

interface ErrorProps {
    message : string | undefined
}

export function FormError ({message} : ErrorProps) {

    return (
        <FormErrorSpan>{message}</FormErrorSpan>
    )
}