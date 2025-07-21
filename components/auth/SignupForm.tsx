'use client';

import { useState } from 'react';

import { SiGoogle } from 'react-icons/si';

import { useRouter } from 'next/navigation';
import { SignupFormData } from '@/types/signup';
import { signupSchema } from '@/lib/validators/signup';

export default function SignupForm() {
  const [formData, setFormData] = useState<SignupFormData>({
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const router = useRouter();

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof SignupFormData, string>>
  >({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
    setError('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Error durring signup reuqest');
        return;
      }

      if (res.ok) {
        setSuccess('Account created successfully!');
        setTimeout(() => {
          router.push('/auth/login');
        }, 1500);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Something went wrong during /signup request');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center p-10 space-y-4 bg-[#1C0846] rounded-2xl"
    >
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Create Your Account
        </h1>
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {formErrors.email && (
          <p className="text-red-500 text-sm">{formErrors.email}</p>
        )}
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
        {formErrors.password && (
          <p className="text-red-500 text-sm">{formErrors.password}</p>
        )}
      </div>

      <div>
        <label>Repeat Password</label>
        <input
          name="passwordRepeat"
          type="password"
          value={formData.passwordRepeat}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
        />
        {formErrors.passwordRepeat && (
          <p className="text-red-500 text-sm">{formErrors.passwordRepeat}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-[#894aff] text-white px-12 py-2 text-center rounded"
      >
        {loading ? 'Creating account...' : 'Sign Up'}
      </button>

      <h3 className="text-lg text-center font-[family-name:var(--font-montserrat)] mb-2">
        OR
      </h3>

      <button className="flex bg-[#28005C] text-white px-12 py-2 text-center rounded">
        Continue with Google
        <SiGoogle size={25} className="text-[#894aff] ml-4 mt-2 sm:mt-0" />
      </button>

      <div className="inline max-w-full">
        <span>Already have account ?</span>
        <a
          href="/auth/login"
          className="sm:ml-12 ml-4 text-[#894aff] font-bold hover:text-white text-sm font-[family-name:var(--font-inter)]"
        >
          Login
        </a>
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