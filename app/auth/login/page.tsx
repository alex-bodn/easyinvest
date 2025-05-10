"use client";

import Navbar from "@/components/ui/Navbar";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
    return(
         <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
            <Navbar />
            <main className="max-w-md mx-auto py-12 px-6">
                <LoginForm />
            </main>
        </div>
    )
}