'use client'
import { NavBar } from "@/components/navbar/component";
import { LoginContent, LoginSection } from "./styles";
import { LoginForm } from "./loginForm/component";
import { Metadata } from "next";


export default function LoginPage() {

    

    return (
        <>
            <NavBar />
            <LoginSection>
                <LoginContent>
                    <h2>Login Admin</h2>
                    <LoginForm />
                </LoginContent>
            </LoginSection>
        </>
    )
}