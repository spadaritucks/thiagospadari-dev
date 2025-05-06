'use client'
import { NavBar } from "@/components/navbar/component";
import { LoginContent, LoginFooter, LoginForm, LoginSection, SubmitButton } from "./styles";
import { Input } from "@/components/input/component";

export default function LoginPage() {

    return (
        <>
            <NavBar />
            <LoginSection>
                <LoginContent>
                    <h2>Login Admin</h2>
                    <LoginForm>
                        <Input label="Email" type="email" placeholder="jonh@example.com"/>
                        <Input label="Password" type="password" placeholder="Your Password"/>
                        <LoginFooter>
                            <SubmitButton type="submit">Login</SubmitButton>
                        </LoginFooter>
                    </LoginForm>
                </LoginContent>
            </LoginSection>
        </>
    )
}