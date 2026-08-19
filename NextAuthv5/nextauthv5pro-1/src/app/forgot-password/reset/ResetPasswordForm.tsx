"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AuthCard } from "../../../components/auth/AuthCard";
import { Button } from "../../../components/ui/Button";
import { useRouter } from "next/navigation";
import axios from "axios";
import { z } from "zod";

const resetSchema = z
  .object({
    pass: z.string().min(8, "Password must be 8+ chars"),
    confirmPass: z.string(),
  })
  .refine((data) => data.pass === data.confirmPass, {
    message: "Passwords don't match",
    path: ["confirmPass"],
  });

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [pass, setPass] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleResetPass = async () => {
    if (!token) {
      alert("Invalid or missing reset token");
      return;
    }

    const result = resetSchema.safeParse({ pass, confirmPass });

    if (!result.success) {
      alert(result.error.issues[0]?.message);
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/forgot-password/reset", {
        token,
        pass: result.data.pass,
      });
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.error);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Reset your password"
      subtitle="Enter your new password below"
    >
      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            New Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input-field"
            value={pass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPass(e.target.value)
            }
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-zinc-300">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="input-field"
            value={confirmPass}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPass(e.target.value)
            }
          />
        </div>
        <Button
          onClick={handleResetPass}
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </div>
    </AuthCard>
  );
}