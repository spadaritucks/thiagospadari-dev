'use client'
import { Input } from "@/components/input/component";
import { NewUserForm } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button/component";
import { FormError } from "@/components/formError/component";
import { useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/context/ModalContext";

const createUserSchema = z.object({
    name: z.string().min(1, "O nome do usuário é obrigatório"),
    email: z.string().email({message : "Insira um email válido"}),
    password: z.string().min(4).max(30),
    confirm_password : z.string().min(4).max(30)
})

type UserFormdata = z.infer<typeof createUserSchema>

export function UserForm() {
    const queryClient = useQueryClient()

    const { handleSubmit, register, formState: { isSubmitting, errors }, watch } = useForm<UserFormdata>({
        resolver: zodResolver(createUserSchema)
    })

    const { hideModal } = useModal()

    async function ClickSubmitUsers(data: UserFormdata) {
        try {
            
            if(data.password !== data.confirm_password){
                return toast.error("Confirme sua senha corretamente")
            }
                const response = await api.post('/users/create-user', {
                    name: data.name,
                    email : data.email,
                    password : data.password
                })
            toast.success(response.data.message)


            queryClient.invalidateQueries({
                queryKey: ["users"],
                exact: false
            })

            hideModal()
        } catch (error: any) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <NewUserForm onSubmit={handleSubmit(ClickSubmitUsers)}>
            <Input label="Nome do Usuário" type="text" {...register('name')} />
            {errors.name && <FormError message={errors.name?.message}></FormError>}
            <Input label="Email" type="email" {...register('email')} />
            {errors.email && <FormError message={errors.email?.message?.toString()}></FormError>}
            <Input label="Senha" type="password" {...register('password')} />
            {errors.password && <FormError message={errors.password?.message?.toString()}></FormError>}
            <Input label="Confirmar Senha" type="password" {...register('confirm_password')} />
            {errors.confirm_password && <FormError message={errors.confirm_password?.message?.toString()}></FormError>}
            <Button type="submit" variant="success" disabled={isSubmitting}>Enviar</Button>
        </NewUserForm>
    )
}