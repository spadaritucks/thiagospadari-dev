'use client'
import { NavBar } from "@/components/navbar/component";
import { LoginContent, LoginSection } from "./styles";
import { LoginForm } from "./loginForm/component";
import { z } from "zod";
import { useForm } from "react-hook-form";



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