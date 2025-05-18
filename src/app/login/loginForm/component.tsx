'use client'
import { Input } from "@/components/input/component";
import { LoginFooter, SubmitButton, Form} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "@/lib/axios";
import { Button } from "@/components/button/component";
import { FormError } from "@/components/formError/component";
import { LoginResponse } from "@/RequestTypes/LoginResponse";
import { toast } from "sonner";
import { useRouter } from "next/navigation";



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

    const router = useRouter()
    

    async function HandleLoginSubmit(data: LoginFormData) {
        try{

            const response = await api.post<LoginResponse>("/auth",{
                email : data.email,
                password : data.password
            })
        

           
            router.push('/admin/dashboard')

        }catch(error : any) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <Form onSubmit={handleSubmit(HandleLoginSubmit)}>
            <Input label="Email" type="email" placeholder="jonh@example.com" {...register('email')} />
            {errors.email && <FormError message={errors.email.message}></FormError>}
            <Input label="Senha" type="password" placeholder="Sua Senha" {...register('password')} />
            {errors.password && <FormError message={errors.password.message}></FormError>}
            <LoginFooter>
                <Button variant="success" disabled={isSubmitting}  type="submit">Login</Button>
            </LoginFooter>
        </Form>
    )
}