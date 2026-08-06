"use client";
import { useState } from "react";
import Link from "next/link";
import { AuthCard } from "../../components/auth/AuthCard";
import { Button } from "../../components/ui/Button";
import axios from "axios";
import { z } from "zod";
import type React from "react";

const emailSchema = z.string().email("Invalid email")

type Email = z.infer<typeof emailSchema>;

export default function ForgotPasswordForm() {
  const [sent, setSent] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<Email>("");

  const handleForgotPass = async () => {
    const result = emailSchema.safeParse(email);

    if (!result.success) {
      alert(result.error.issues[0]?.message);
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/forgot-password", {email: result.data});
      setSent(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error);
      }
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <AuthCard
        title="Check your email!"
        subtitle={`Reset link sent to ${email}`}
        footer={
          <Link
            href="/login"
            className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Back to login
          </Link>
        }
      ></AuthCard>
    );
  }

  return (
    <AuthCard
      title="Forgot the password"
      subtitle="Enter your email and we'll send you a reset link"
      footer={
        <>
          Remember your password?{" "}
          <Link
            href="/"
            className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Login
          </Link>
          <br />
          <span className="mt-2 inline-block">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              Sign up
            </Link>
          </span>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Forgot password form">
        <div className="border-b border-white/10 pb-5" />
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
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <Button
          onClick={handleForgotPass}
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? "Sending..." : "Send reset link"}
        </Button>
      </div>
    </AuthCard>
  );
}