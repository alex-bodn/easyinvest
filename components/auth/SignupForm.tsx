'use client';

import { useState } from 'react';
import axios from 'axios';

import { SignupFormData } from '@/types/signup';
import { signupSchema } from "@/lib/validators/signup";
import { ZodError } from "zod";

export default function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [formErrors, setFormErrors] = useState<Partial<Record<keyof SignupFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
        ...prev,
        [ e.target.name ]: e.target.value
    }));
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = signupSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof SignupFormData, string>> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof SignupFormData;
        fieldErrors[field] = issue.message;
      }
      setFormErrors(fieldErrors);
      return;
    }

    setFormErrors({});
    setLoading(true);
    setError("");

    try {
        await axios.post("/api/auth/signup", formData)
    } catch (err: any) {
        setError(err.response?.data?.message || "Something went wrong durring /signup request");
    } finally {
        setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center p-10 space-y-4 bg-[#1C0846] rounded-2xl">
      <div>
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

      <a href="#" className="text-white/70 hover:text-white text-sm font-[family-name:var(--font-inter)]">Login</a>

      <button type="submit" className="bg-[#894aff] text-white px-12 py-2 text-center rounded">
        Sign Up
      </button>
      
    </form>
  );
}
