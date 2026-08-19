"use client";
import { useSession, signOut } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [manualUser, setManualUser] = useState<{ name: string; email: string } | null>(null);
  const [checkingManual, setCheckingManual] = useState(true);

  useEffect(() => {
    // ✅ agar NextAuth session nahi hai, tab hi manual check karo
    if (status === "loading") return;
    if (session) {
      setCheckingManual(false);
      return;
    }

    const fetchManualUser = async () => {
      try {
        const res = await axios.get("/api/auth/me");
        setManualUser(res.data);
      } catch {
        // dono jagah se login nahi mila, toh login page bhej do
        router.push("/");
      } finally {
        setCheckingManual(false);
      }
    };

    fetchManualUser();
  }, [status, session]);

  const loading = status === "loading" || checkingManual;

  const name = session?.user?.name ?? manualUser?.name ?? "User";
  const email = session?.user?.email ?? manualUser?.email ?? "you@gmail.com";
  const techStack = ["TailwindCSS", "Next.js", "Typescript", "Sql"];
  const firstLetter = name.charAt(0).toUpperCase();

  const handleLogout = async () => {
    if (session) {
      await signOut({ callbackUrl: "/" }); // NextAuth logout
    } else {
      await axios.post("/api/auth/logout"); // manual logout
      router.push("/");
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
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col items-center gap-4">
        <div className="w-20 h-20 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-semibold">
          {firstLetter}
        </div>
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center">
          {techStack.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs bg-indigo-50 text-indigo-700 rounded-full border border-indigo-100">
              {tech}
            </span>
          ))}
        </div>
        <button onClick={handleLogout} className="mt-2 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition">
          Logout
        </button>
      </div>
    </main>
  );
}