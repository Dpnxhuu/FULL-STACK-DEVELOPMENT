"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AuthCard } from "../../../components/auth/AuthCard";
import { AuthDivider } from "../../../components/auth/AuthDivider";
import { GoogleAuthButton } from "../../../components/auth/GoogleAuthButton";
import { Button } from "../../../components/ui/Button";
import axios from "axios";

interface Form {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function VerificationSent({ email }: {email: string}) {
  return (
    <div className="dark-page app-gradient min-h-screen flex items-center justify-center px-4">
      <div className="glass-panel rounded-2xl p-8 max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 ring-1 ring-accent/20 mx-auto mb-5">
          <span className="text-2xl">✉️</span>
        </div>

        {/* Text */}
        <p className="section-label mb-2">Almost there</p>
        <h2 className="text-lg font-semibold mb-2">Verify your email</h2>
        <p className="text-sm text-muted mb-1">
          We've sent a verification link to
        </p>
        <p className="text-sm font-medium text-accent mb-6 truncate px-4">
          {email}
        </p>
        <p className="text-sm text-muted mb-6">
          Click the link in the email to activate your account. The link will
          expire in 24 hours.
        </p>

        {/* Resend */}
        {/* <div className="border-t border-border/40 pt-5">
          <p className="text-xs text-muted/60">
            Didn't receive the email?{" "}
            <button className="text-accent hover:text-accent/80 transition-colors font-medium">
              Resend verification email
            </button>
          </p>
        </div> */}
      </div>
    </div>
  );
}

export default function SignupEmailPage() {
  const [form, setForm] = useState<Form>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [reso, setReso] = useState<boolean>(false);
  // const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSingUp = async () => {
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      alert("please fill all the fields");
      return;
    }

    if(form.password !== form.confirmPassword){
      alert("Password does not macthing!")
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/signup/", form);
      console.log(res.data.message);
      setReso(true);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error);
      }
    } finally {
      setLoading(false);
    }
  };

  if (reso) {
    return <VerificationSent email={form.email} />;
  }

  return (
    <AuthCard
      title="Create your account"
      subtitle="Start your journey with Lumina today"
      footer={
        <>
          Already have an account?{" "}
          <Link
            href="/"
            className="cursor-default font-medium text-violet-400 transition-colors hover:text-violet-300"
          >
            Log in
          </Link>
        </>
      }
    >
      <div className="space-y-5" role="form" aria-label="Signup form">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="your name"
            className="input-field"
            autoComplete="name"
            value={form.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

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
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            className="input-field"
            autoComplete="new-password"
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="mb-2 block text-sm font-medium text-zinc-300"
          >
            Confirm password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="••••••••"
            className="input-field"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />
        </div>

        <Button
          onClick={handleSingUp}
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? "Creating account..." : "Sign up"}
        </Button>

        <AuthDivider />

        <GoogleAuthButton label="Sign up with Google" />
      </div>
    </AuthCard>
  );
}
