'use client'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { PaginationActions, PaginationButton, PaginationContent, PaginationNumberPage } from "./styles";

export interface PaginationProps {
    pageIndex: number;
    totalCount: number;
    perPage: number;
    onPageChange: (pageIndex: number) => Promise<void> | void
}

export function Pagination ({onPageChange,pageIndex,perPage,totalCount} : PaginationProps) {
    const pages = Math.ceil(totalCount / perPage) || 1

    return (
        <PaginationContent>
            <PaginationNumberPage><span>Pagina {pageIndex + 1} de {pages}</span></PaginationNumberPage>
            <PaginationActions>
                <PaginationButton onClick={() => onPageChange(0)} disabled={pageIndex === 0}>
                    <ChevronsLeft/>
                </PaginationButton>
                <PaginationButton onClick={() => onPageChange(pageIndex -1)} disabled={pageIndex === 0}>
                    <ChevronLeft/>
                </PaginationButton>
                <PaginationButton onClick={() => onPageChange(pageIndex + 1)} disabled={pages <= pageIndex + 1}>
                    <ChevronRight/>
                </PaginationButton>
                <PaginationButton onClick={() => onPageChange(pages - 1)} disabled={pages <= pageIndex + 1}> 
                    <ChevronsRight/>
                </PaginationButton>
            </PaginationActions>
        </PaginationContent>
    )
}