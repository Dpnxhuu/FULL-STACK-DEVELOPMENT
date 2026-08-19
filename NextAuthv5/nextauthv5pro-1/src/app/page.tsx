"use client";
import Link from "next/link";
import { AuthCard } from "@/components/auth/AuthCard";
import { AuthDivider } from "@/components/auth/AuthDivider";
import { GoogleAuthButton } from "@/components/auth/GoogleAuthButton";
import { Button } from "@/components/ui/Button";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";
import { z } from "zod";

// interface Form {
//   email: string;
//   password: string;
// }

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password is too short"),
});

type Form = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [show, setShow] = useState<boolean>(false);
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async () => {
    const result = loginSchema.safeParse(form);

    if (!result.success) {
      alert(result.error.issues[0]?.message);
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/auth/login", result.data);
      router.push("/home");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.error || "Something went wrong!");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Sign in to continue to your dashboard"
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Sign up
          </Link>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Login form">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input-field"
            autoComplete="email"
            value={form.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between">
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-300"
            >
              Password
            </label>
            <Link
              href="/forgot-password"
              className="cursor-default text-sm text-violet-400 transition-colors hover:text-violet-300"
            >
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              id="password"
              name="password"
              placeholder="••••••••"
              className="input-field pr-10"
              autoComplete="current-password"
              value={form.password}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setForm({ ...form, password: e.target.value })
              }
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
            >
              {show ? <Eye size={16} /> : <EyeOff size={16} />}
            </button>
          </div>
        </div>

        <Button
          onClick={handleLogin}
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? "Signing in..." : "Sign in"}
        </Button>

        <AuthDivider />

        <GoogleAuthButton label="Sign in with Google" />
      </div>
    </AuthCard>
  );
}