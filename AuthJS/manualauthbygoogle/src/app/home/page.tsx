"use client";

import axios, { isAxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  const handleLogOut = async () => {
    try {
      await axios.post("/api/logout");
      router.replace("/")
    } catch (error: unknown) {
      if(axios.isAxiosError(error)){
        alert(error.response?.data.message);
      }
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}