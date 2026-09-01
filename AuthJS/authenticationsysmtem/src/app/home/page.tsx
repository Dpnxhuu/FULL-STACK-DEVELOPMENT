import { auth } from "@/auth";
import { signOut } from "@/auth";
import Image from "next/image";

export default async function Home() {
  const session = await auth();

  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center gap-4 bg-[#0a0a0a] px-4">
      <div className="w-full max-w-sm bg-[#151515] border border-[#262626] rounded-xl shadow-lg p-8 flex flex-col items-center gap-3">
        {session?.user?.image && (
          <Image
            src={session.user.image}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full border border-[#2e2e2e]"
          />
        )}

        <h1 className="text-lg font-semibold text-neutral-100 mt-2">
          {session?.user?.name}
        </h1>
        <p className="text-sm text-neutral-400">{session?.user?.email}</p>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
          className="w-full mt-4"
        >
          <button
            type="submit"
            className="cursor-pointer w-full py-2 rounded-lg bg-neutral-100 text-black text-sm font-semibold hover:bg-neutral-300 transition-colors"
          >
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
}