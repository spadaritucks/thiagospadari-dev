'use client'
import { useModal } from "@/context/ModalContext"
import { ModalBody, ModalContent, ModalHeader, ModalOverlay, ModalSection } from "./styles"
import { X } from "lucide-react"

export function Modal() {

    const { modalTitle, modalBody, modalOpen, hideModal } = useModal()

    if(!modalOpen){
        return null
    }

    return (

        <ModalSection>
            <ModalOverlay ></ModalOverlay>
            <ModalContent>
                <ModalHeader>
                    <h3>{modalTitle}</h3>
                    <X onClick={hideModal} />
                </ModalHeader>
                <ModalBody>
                    {modalBody}
                </ModalBody>
            </ModalContent>
        </ModalSection>


    )
}