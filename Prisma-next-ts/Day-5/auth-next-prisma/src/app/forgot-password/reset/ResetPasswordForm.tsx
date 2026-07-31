"use client"
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AuthCard } from "../../../components/auth/AuthCard";
import { Button } from "../../../components/ui/Button";
import { useRouter } from "next/navigation";

export default function ResetPasswordForm() {

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
            
          />
        </div>
        <Button variant="primary" size="lg" className="w-full">
          {false ? "Resetting..." : "Reset Password"}
        </Button>
      </div>
    </AuthCard>
  )
}