import { Input } from "@/components/input/component";
import { FormError, NewSkillForm, SubmitButton } from "./styles";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { api } from "@/lib/axios";
import { toast } from "sonner";

const createSkillSchema = z.object({
    name: z.string().min(1, "O nome da skill é obrigatório"),
    image: z.any()
        .refine((file) => file?.[0]?.type?.startsWith("image/"), {
            message: "O arquivo deve ser uma imagem"
        })
        .refine((file) => file?.[0]?.size <= 5 * 1024 * 1024, {
            message: "A imagem deve ter no máximo 5MB"
        })
})

type SkillFormdata = z.infer<typeof createSkillSchema>

export function SkillForm() {

    const { handleSubmit, register, formState: { isSubmitting, errors }, watch } = useForm<SkillFormdata>({
        resolver: zodResolver(createSkillSchema)
    })

    async function ClickSubmitSkills(data: SkillFormdata) {

        try{
            const formdata = new FormData()
            formdata.append('name', data.name)
            formdata.append('image', data.image[0])
            const response = await api.post('/skills/create-skill', formdata)
            toast.success(response.data.message)

        }catch(error : any){
            toast.error(error?.response?.data?.message) 
        }
        
    }
       

    return (
        <NewSkillForm onSubmit={handleSubmit(ClickSubmitSkills)}>
            <Input label="Skill Name" type="text" {...register('name')} />
            {errors.name && <FormError>{errors.name?.message}</FormError>}
            <Input label="Skill Image" type="file" {...register('image')} />
            {errors.image && <FormError>{errors.image?.message?.toString()}</FormError>}
            <SubmitButton disabled={isSubmitting} type="submit">Enviar</SubmitButton>
        </NewSkillForm>
    )
}