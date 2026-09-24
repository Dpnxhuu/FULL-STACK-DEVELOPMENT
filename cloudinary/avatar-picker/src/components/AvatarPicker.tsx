"use client";

import { useEffect, useState } from "react";
import axios from "axios"
import Image from "next/image";

export default function AvatarPicker() {
  const [preview, setPreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null)
  const [avatar, setAvatar] = useState<string>("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
  const saved = localStorage.getItem("avatar");
  // eslint-disable-next-line react-hooks/set-state-in-effect
  if (saved) setAvatar(saved);
}, []); // khaali array = sirf ek baar, component mount hone ke baad chalega

  // Abhi sirf UI test ke liye — local preview dikhayega, upload baad me jodenge
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if(!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true)
    try{

      const res = await axios.post("/api/upload", formData)
      const url = res.data.secure_url;
      setAvatar(url);
      localStorage.setItem("avatar", url)

      setFile(null)
      setPreview(null);
    }catch(error){
      const message = error instanceof Error? error.message : "Unknown error!";
      console.error("Error:",message)
      alert(message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="max-w-sm mx-auto mt-10 flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">Profile Avatar</h2>

      {/* Circular avatar box */}
      <div className="relative w-32 h-32">
        <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white bg-gray-700 flex items-center justify-center">
          {preview || avatar ? (
            <Image
              src={preview? preview : avatar}
              alt="avatar preview"
              height={128}
              width={128}
              priority={true}
              className="object-cover"
            />
          ) : (
            <span className="text-gray-400 text-sm">No Photo</span>
          )}
        </div>

        {/* Camera icon overlay — file input ko chhupa ke uske upar rakha hai */}
        <label className="absolute bottom-0 right-0 bg-blue-600 hover:bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer border-2 border-white">
          📷
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>
      </div>

      <button
        onClick={handleUpload}
        disabled={!preview}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
      >
        {loading? "saving..." : "save avatar"}
      </button>
    </div>
  );
}