"use client";

import Navbar from "@/components/ui/Navbar";
import SignupForm from "@/components/auth/SignupForm";

export default function Signup() {
    return(
         <div className="min-h-screen bg-background text-foreground p-6 md:p-8">
            <Navbar />
            <main className="max-w-md mx-auto py-12 px-6">
                <SignupForm />
            </main>
        </div>
    )
}