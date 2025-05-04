'use client'

import { GlobalStyle } from "@/app/styles/global";
import { defaultTheme } from "@/themes/default";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({children} : DefaultLayoutProps) {

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    )
}