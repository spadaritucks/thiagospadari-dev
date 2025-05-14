'use client'

import { GlobalStyle } from "@/app/styles/global";
import { Modal } from "@/components/modal/component";
import { queryClient } from "@/lib/reactQuery";
import { defaultTheme } from "@/themes/default";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { Toaster } from 'sonner'

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                {children}
                <Toaster richColors />
            </ThemeProvider>
        </QueryClientProvider>

    )
}