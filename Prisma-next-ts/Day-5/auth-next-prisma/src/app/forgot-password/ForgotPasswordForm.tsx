"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { AuthCard } from "../../components/auth/AuthCard";
import { Button } from "../../components/ui/Button";

export default function ForgotPasswordForm() {

  if (false) {
    return (
      <AuthCard
        title="Check your email!"
        subtitle={`Reset link sent to ${""}`}
        footer={
          <Link href="/login" className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300">
            Back to login
          </Link>
        }
      />
    )
  }

  return (
    <AuthCard
      title="Forgot the password"
      subtitle="Enter your email and we'll send you a reset link"
      footer={
        <>
          Remember your password?{" "}
          <Link href="/" className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300">
            Login
          </Link>
          <br />
          <span className="mt-2 inline-block">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300">
              Sign up
            </Link>
          </span>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Forgot password form">
        <div className="border-b border-white/10 pb-5" />
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-zinc-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            className="input-field"
            autoComplete="email"
          />
        </div>
        <Button  variant="primary" size="lg" className="w-full">
          {false ? "Sending..." : "Send reset link"}
        </Button>
      </div>
    </AuthCard>
  );
}