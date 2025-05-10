'use client';

import { useState } from 'react';
import axios from 'axios';

import { SiGoogle } from 'react-icons/si';

import { useRouter } from "next/navigation";
import { LoginFormData } from '@/types/login';
import { loginSchema } from "@/lib/validators/login";

export default function SignupForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });

  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
        ...prev,
        [ e.target.name ]: e.target.value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof LoginFormData;
        fieldErrors[field] = issue.message;
      }
      setFormErrors(fieldErrors);
      return;
    }

    setFormErrors({});
    setLoading(true);
    setError("");

    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await res.json();
      
        if (!res.ok) {
          setError(data.message || "Error durring signup reuqest");
          return;
        }
        
        if (res.ok) {
            document.cookie = `auth_token=${data.token}; path=/; max-age=${60 * 60 * 24 * 7}`;

            setSuccess("Account loggined!");
            setTimeout(() => { router.push("/dashboard"); }, 1500);
        }
    } catch (err: any) {
        setError(err.response?.data?.message || "Something went wrong durring /signup request");
    } finally {
        setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center p-10 space-y-4 bg-[#1C0846] rounded-2xl">
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">Log In</h1>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
      </div>

      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {formErrors.password && <p className="text-red-500 text-sm">{formErrors.password}</p>}
      </div>

      <button type="submit" className="bg-[#894aff] text-white px-12 py-2 text-center rounded">
        {loading ? "Logining into account..." : "Log In"}
      </button>
      
      <h3 className="text-lg text-center font-[family-name:var(--font-montserrat)] mb-2">
            OR
      </h3>

      <button className="flex bg-[#28005C] text-white px-12 py-2 text-center rounded">
        Continue with Google
        <SiGoogle size={25} className="text-[#894aff] ml-4 mt-2 sm:mt-0" />
      </button>

      <div className="flex justify-center max-w-full">
        <a href="/auth/signup" className="text-[#894aff] font-bold hover:text-white text-sm font-[family-name:var(--font-inter)]">Sign Up</a>
      </div>

      {error && <p className="text-red-500 text-m ">{error}</p>}

      {success && (
        <div className="text-[#4aff7d] border border-green-300 p-3 rounded mb-4 text-sm">
            {success}
        </div>
       )}
    </form>
  );
}
