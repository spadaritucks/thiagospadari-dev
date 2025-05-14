import { ReactNode, useState } from "react"
import { Button } from "../button/component"
import { Select } from "../select/component"
import { TagInputActions, TagInputContent, TagInputSelected, TagInputWrapper } from "./styles"
import { X } from "lucide-react"

interface TagsInputProps {
    name: string
    options: ReactNode
    value?: string[]
    onChange?: (value: string[]) => void
}

export function TagInput({ name, options, value, onChange }: TagsInputProps) {
    const [selected, setSelected] = useState<{ value: string; innerHtml: string }>({
        value: "",
        innerHtml: ""
    })
    const [tags, setTags] = useState<{ value: string; innerHtml: string }[]>([])

    function HandleTakeSelectValue(e: React.ChangeEvent<HTMLSelectElement>) {
        e.preventDefault()
        const value = e.target.value;
        const innerHtml = e.target.options[e.target.selectedIndex].innerHTML
        setSelected({ value, innerHtml })
    }

    function HandleAddTagInTheTagContent() {
        if (selected) {
            setTags(state => {
                const exists = state.some(tag => tag.value === selected.value)
                if (exists) return state
                const newTags = [...state, { value: selected.value, innerHtml: selected.innerHtml }]
                onChange?.(newTags.map(tag => tag.value))
                return newTags
            })
        }
    }

    function HandleRemoveTagInTheContent(value: string) {
        const currentTag = tags.filter((tag) => value !== tag.value)
        setTags(currentTag)
        onChange?.(currentTag.map(tag => tag.value))
    }

    function HandleClearTags() {
        setTags([])
        onChange?.([])
    }

    return (
        <TagInputWrapper>
            <Select label={name} defaultValue="selecione" onChange={HandleTakeSelectValue}>
                {options}
            </Select>
            <TagInputContent>
                {tags && tags.length > 0 ? tags.map((tag) =>
                    <TagInputSelected key={tag.value}>
                        <p>{tag.innerHtml}</p>
                        <X onClick={() => HandleRemoveTagInTheContent(tag.value)} />
                    </TagInputSelected>
                ) : null}
            </TagInputContent>
            <TagInputActions>
                <Button variant="primary" type="button" onClick={HandleAddTagInTheTagContent}>Adicionar</Button>
                <Button variant="destructive" type="button" onClick={HandleClearTags}>Limpar</Button>
            </TagInputActions>
        </TagInputWrapper>
    )
}