'use client'
import { createContext, ReactNode, useContext, useState } from "react"

type Size = "sm" | "md" | "lg"

interface ModalContextType {
    modalOpen: boolean
    modalTitle: string
    modalBody: ReactNode
    openModal: (size  : Size, title: string, body: ReactNode) => void
    hideModal: () => void
    size : Size
}

interface ModalProviderProps {
    children: ReactNode
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: ModalProviderProps) => {
    const [modalTitle, setModalTitle] = useState<string>('')
    const [modalBody, setModalBody] = useState<ReactNode>(null)
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [size, setSize] = useState<Size>("sm")

    const openModal = (size : Size, title: string, body: ReactNode) => {
        setModalTitle(title)
        setModalBody(body)
        setSize(size)
        setModalOpen(true)
    }

    const hideModal = () => setModalOpen(false)

    return (
        <ModalContext.Provider value={{modalTitle, modalBody, modalOpen,openModal, hideModal, size}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModal = () => {
    const context = useContext(ModalContext)
    if(context == undefined){
        throw new Error('useModal must be used within a ModalProvider')
    }
    return context
}