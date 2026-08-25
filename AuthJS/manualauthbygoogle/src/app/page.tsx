"use client";
import Image from "next/image";

export default function Home() {
  const handleGoogleLogin = () => {
  const params = new URLSearchParams({
    client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
    redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/google/callback`,
    response_type: "code",
    scope: "openid email profile",
  });

  window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

  // const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;

  // // window.open se popup khulta hai, window.location.href se nahi
  // window.open(
  //   googleAuthUrl,
  //   "google-login",
  //   "width=500,height=600,top=100,left=500"
  // );
};

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <button type="button" onClick={handleGoogleLogin}>
        G Sign in with google
      </button>
    </div>
  );
}
