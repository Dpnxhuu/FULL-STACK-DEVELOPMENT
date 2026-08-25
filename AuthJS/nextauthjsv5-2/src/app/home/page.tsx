import { auth, signOut } from "@/auth";

export default async function HomePage() {
  const session = await auth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-6 text-white">
      <div className="text-center">
        {session?.user?.image && (
          <img
            src={session.user.image}
            alt="Profile"
            className="mx-auto h-16 w-16 rounded-full border border-white/10"
          />
        )}
        <p className="mt-4 text-lg font-medium">{session?.user?.name}</p>
        <p className="text-sm text-zinc-500">{session?.user?.email}</p>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
          className="mt-6"
        >
          <button
            type="submit"
            className="rounded-xl border border-white/10 bg-zinc-900 px-6 py-2 text-sm font-medium hover:bg-zinc-800"
          >
            Sign out
          </button>
        </form>
      </div>
    </main>
  );
}