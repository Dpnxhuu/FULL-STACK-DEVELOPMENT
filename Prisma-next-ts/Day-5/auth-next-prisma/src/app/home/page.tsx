"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { z } from "zod";

const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

type UserProp = z.infer<typeof userSchema>;

export default function HomePage() {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<UserProp | null>(null);

  useEffect(() => {
    const UserData = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/auth/me");
        const result = userSchema.safeParse(res.data);
        if (result.success) {
          setUser(result.data);
        }
      } catch (err) {
        if (axios.isAxiosError(err)) {
          alert(err.response?.data?.error);
        }
        await axios.post("/api/auth/logout");
        router.push("/");
      } finally {
        setLoading(false);
      }
    };

    UserData();
  }, []);

  const { name, email } = user || { name: "User", email: "you@gmail.com" };
  const techStack = ["TailwindCSS", "Next.js", "Typescript", "Sql"];

  const firstLetter = name.charAt(0).toUpperCase();

  const handleLogout = async () => {
    setLoading(true);
    try {
      await axios.post("/api/auth/logout");
      router.push("/");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        alert(err.response?.data?.err);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    user && (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4">
          {/* Circle DP - first letter wala */}
          <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-semibold">
            {firstLetter}
          </div>

          {/* Name aur Email */}
          <div className="text-center">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>

          {/* Tech Stack badges */}
          <div className="flex flex-wrap gap-2 justify-center">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Logout button */}
          <button
            onClick={handleLogout}
            className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            Logout
          </button>
        </div>
      </main>
    )
  );
}