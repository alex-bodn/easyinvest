"use client";

import Navbar from "@/components/ui/Navbar";
import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
    return(
         <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
            <Navbar />
            <main className="max-w-md mx-auto py-12 px-6">
                <h1 className="text-3xl font-bold mb-4 text-center">Create Your Account</h1>
                <SignupForm />
            </main>
        </div>
    )
}