"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
// import { email, string } from "zod";

interface User {
  name: string,
  email: string,
  id: string,
}

export default function Home() {

  const [user, setUser] = useState<User>()
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/api/profile");
        setUser(res.data.user)
        // console.log("data:", res.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // alert(error.response?.data?.error);
          await axios.post("/api/logout");
          router.push("/")
        }
      }
    }
    fetchData();
  }, [router]);

  const handleLogout = async () => {
    try {
      await axios.post("/api/logout");
      router.push("/")
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.error);
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 bg-[#0a0a0a] px-4">
      <div className="w-full max-w-sm bg-[#151515] border border-[#262626] rounded-xl shadow-lg p-8 flex flex-col items-center gap-3">
        {/* {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full border border-[#2e2e2e]"
          />
        )} */}

        <h1 className="text-lg font-semibold text-neutral-100 mt-2">
          {user?.name}
        </h1>
        <p className="text-sm text-neutral-400">{user?.email}</p>

          <button
            type="button"
            onClick={handleLogout}
            className="w-full mt-4 cursor-pointer py-2 rounded-lg bg-neutral-100 text-black text-sm font-semibold hover:bg-neutral-300 transition-colors"
          >
            Sign Out
          </button>
      </div>
    </div>
  );
}
