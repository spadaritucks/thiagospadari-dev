'use client'
import { Input } from "@/components/input/component";
import { NewSkillForm } from "./styles";
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

const createSkillSchema = z.object({
    name: z.string().min(1, "Skill name is required"),
    image: z.any()
        .refine((file) => file?.[0]?.type?.startsWith("image/"), {
            message: "File must be an image"
        })
        .refine((file) => file?.[0]?.size <= 5 * 1024 * 1024, {
            message: "Image must be at most 5MB"
        })
})

type SkillFormdata = z.infer<typeof createSkillSchema>

export function SkillForm() {
    const queryClient = useQueryClient()

    const { handleSubmit, register, formState: { isSubmitting, errors }, watch } = useForm<SkillFormdata>({
        resolver: zodResolver(createSkillSchema)
    })

    const { hideModal } = useModal()

    async function ClickSubmitSkills(data: SkillFormdata) {
        try {
            const formdata = new FormData()
            formdata.append('name', data.name)
            formdata.append('image', data.image[0])
            const response = await api.post('/skills/create-skill', formdata)
            toast.success(response.data.message)



            queryClient.invalidateQueries({
                queryKey: ["skills"],
                exact: false
            })

            hideModal()
        } catch (error: any) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <NewSkillForm onSubmit={handleSubmit(ClickSubmitSkills)}>
            <Input label="Skill Name" type="text" {...register('name')} />
            {errors.name && <FormError message={errors.name?.message}></FormError>}
            <Input label="Skill Image" type="file" {...register('image')} />
            {errors.image && <FormError message={errors.image?.message?.toString()}></FormError>}
            <Button type="submit" variant="success" disabled={isSubmitting}>Submit</Button>
        </NewSkillForm>
    )
}