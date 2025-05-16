'use client'
import { Input } from "@/components/input/component";
import { GridContent, GridFullRowContent, NewProjectForm } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { string, z } from "zod";
import { api } from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Button } from "@/components/button/component";
import { FormError } from "@/components/formError/component";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useModal } from "@/context/ModalContext";
import { TagInput } from "@/components/tagsInput/component";
import { TextArea } from "@/components/textarea/component";



const createProjectSchema = z.object({
    name: z.string().min(1, "O nome do projeto é obrigatório"),
    image: z.any()
        .refine((file) => file?.[0]?.type?.startsWith("image/"), {
            message: "O arquivo deve ser uma imagem"
        })
        .refine((file) => file?.[0]?.size <= 5 * 1024 * 1024, {
            message: "A imagem deve ter no máximo 5MB"
        }),
    description: z.string().min(1, "Descrição é obrigatoria"),
    skills_id: z.string().array(),
    git_repository: z.optional(z.string()).nullable(),
    project_link: z.optional(z.string()).nullable()
})

type ProjectFormdata = z.infer<typeof createProjectSchema>


export function ProjectForm() {
    const queryClient = useQueryClient()

    const { handleSubmit, register, formState: { isSubmitting, errors }, control } = useForm<ProjectFormdata>({
        resolver: zodResolver(createProjectSchema)
    })

    const { hideModal } = useModal()

    const { data } = useQuery({
        queryFn: async () => {
            const response = await api.get<GetAllSkills>(`/skills/get-skills`, {
                params: {
                    all: "true"
                }
            })
            return response.data
        },
        queryKey: ['skills']
    })


    async function ClickSubmitProjects(data: ProjectFormdata) {
        try {
            const formdata = new FormData()
            formdata.append('name', data.name)
            formdata.append('image', data.image[0])
            formdata.append('description', data.description)
            formdata.append('skills_id', JSON.stringify(data.skills_id))

            const response = await api.post('/projects/create-project', formdata)
            toast.success(response.data.message)



            queryClient.invalidateQueries({
                queryKey: ["projects"],
                exact: false
            })

            hideModal()
        } catch (error: any) {
            toast.error(error?.response?.data?.message)
        }
    }



    return (
        <NewProjectForm onSubmit={handleSubmit(ClickSubmitProjects)}>

            <GridContent>
                <Input label="Project Name" type="text" {...register('name')} />
                {errors.name && <FormError message={errors.name?.message}></FormError>}
            </GridContent>

            <GridContent>
                <Input label="Project Image" type="file" {...register('image')} />
                {errors.image && <FormError message={errors.image?.message?.toString()}></FormError>}
            </GridContent>

            <GridFullRowContent>
                <TextArea label="Description" rows={4} cols={16} {...register('description')} />
                {errors.description && <FormError message={errors.description?.message}></FormError>}
            </GridFullRowContent>

            <GridFullRowContent>
                <Controller
                    name="skills_id"
                    control={control}
                    render={({ field }) => {
                        return (
                            <TagInput
                                name="Skills"
                                value={field.value}
                                onChange={field.onChange}
                                options={
                                    <>
                                        {data?.skills && data.skills.length > 0 ?
                                            data.skills.map((skill, index) => <option key={index} value={skill.id}>{skill.name}</option>)
                                            : ""}
                                    </>
                                }
                            />
                        )
                    }}
                />
                {errors.skills_id && <FormError message={errors.skills_id?.message}></FormError>}

            </GridFullRowContent>

            <GridContent>
                <Input label="Git Repository (Opcional)" type="text" {...register('git_repository')} />
                {errors.git_repository && <FormError message={errors.git_repository?.message}></FormError>}
            </GridContent>

            <GridContent>
                <Input label="Project Link (Opcional)" type="text" {...register('project_link')} />
                {errors.project_link && <FormError message={errors.project_link?.message}></FormError>}
            </GridContent>

            <GridFullRowContent>
                <Button type="submit" variant="success" disabled={isSubmitting}>Enviar</Button>
            </GridFullRowContent>
        </NewProjectForm>
    )
}