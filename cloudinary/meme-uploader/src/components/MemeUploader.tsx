"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import axios from "axios";

export default function MemeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [memes, setMeme] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get("api/memes").then((res) => {
      setMeme(res?.data?.data.map((m: { url: string }) => m.url));
    });
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/api/upload", formData);
      setMeme((prev) => [res.data.data.url, ...prev]);

      setFile(null);
      setPreview(null);

      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      console.error(message);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 flex flex-col gap-6">
      {/* Upload Section */}
      <div className="border rounded-xl p-6 flex flex-col items-center gap-4">
        <h2 className="text-xl font-semibold">📤 Upload Meme</h2>

        {preview && (
          <Image
            src={preview}
            alt="preview"
            width={128}
            height={128}
            className="h-32 object-contain"
          />
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="text-sm"
        />

        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
        >
          {loading ? "Uploading..." : "Upload"}
        </button>
      </div>

      {/* Meme Gallery */}
      <div>
        <h2 className="text-lg font-semibold mb-3">🖼️ Meme Gallery</h2>

        {memes.length === 0 ? (
          <p className="text-gray-400 text-sm">
            Abhi tak koi meme upload nahi hui
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {memes.map((url, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <Image
                  src={url}
                  alt={`meme-${index}`}
                  width={128}
                  height={128}
                  className="h-32 object-cover"
                  quality={100} //chhoti thumbnails pe farak barely visible, aur cache bhi issue create karta hai
                  sizes="(max-width: 768px) 33vw, 200px" //galat/chhota → seedha blurry image (bada impact)
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
