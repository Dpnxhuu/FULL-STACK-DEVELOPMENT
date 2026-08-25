import { z } from "zod";

const envSchema = z.object({
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
  GMAIL_USER: z.string().email("GMAIL_USER must be a valid email"),
  GMAIL_PASS: z.string().min(1, "GMAIL_PASS is required"),
  NEXT_PUBLIC_APP_URL: z.string().url("NEXT_PUBLIC_APP_URL must be a valid URL"),
  DATABASE_URL: z.string().min(1, "DATABASE_URL is required"),
});

envSchema.parse(process.env);