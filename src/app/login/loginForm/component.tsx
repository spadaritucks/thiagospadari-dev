import { Input } from "@/components/input/component";
import { LoginFooter, SubmitButton, Form, FormError } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";

const LoginFormSchema = z.object({
    email: z
        .string()
        .email({ message: "Insira um email valido" }),
    password: z
        .string()
        .min(8, { message: "A senha deve conter no minimo 8 caracteres" })
        .max(100, { message: "A senha deve conter no maximo 100 caracteres" })
})

type LoginFormData = z.infer<typeof LoginFormSchema>

export function LoginForm() {

    const { handleSubmit, register, formState: { isSubmitting, errors } } = useForm<LoginFormData>({
        resolver: zodResolver(LoginFormSchema)
    })

    async function HandleLoginSubmit(data: LoginFormData) {
        const response = await api.post('/create-user', {
            data: data
        })
        console.log(response)
    }


    return (
        <Form onSubmit={handleSubmit(HandleLoginSubmit)}>
            <Input label="Email" type="email" placeholder="jonh@example.com" {...register('email')} />
            {errors.email && <FormError>{errors.email.message}</FormError>}
            <Input label="Password" type="password" placeholder="Your Password" {...register('password')} />
            {errors.password && <FormError>{errors.password?.message}</FormError>}
            <LoginFooter>
                <SubmitButton type="submit" >Login</SubmitButton>
            </LoginFooter>
        </Form>
    )
}