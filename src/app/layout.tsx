import { Modal } from "@/components/modal/component";
import { ModalProvider } from "@/context/ModalContext";
import { DefaultLayout } from "@/layouts/DefaultLayout";
import { queryClient } from "@/lib/reactQuery";
import StyledComponentsRegistry from "@/lib/styled";
import { QueryClientProvider } from "@tanstack/react-query";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { DefaultSeo } from 'next-seo'

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Thiago Spadari Dev | Full Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <StyledComponentsRegistry>
          <ModalProvider>
            <DefaultLayout>
              {children}
              <Modal />
            </DefaultLayout>
          </ModalProvider>

        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
