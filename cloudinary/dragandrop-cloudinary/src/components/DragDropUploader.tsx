"use client";

import { useState } from "react";
import Image from "next/image";

export default function DragDropUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false); // drag ke waqt area highlight karne ke liye

  // Common function — chahe drop ho ya normal file-select, dono ke liye use hoga
  const handleFile = (selectedFile: File) => {
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  // Jab file ko area ke upar khींचte ho (abhi drop nahi kiya)
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault(); // default browser behavior (file ko naye tab mein khol dena) rokna zaroori hai
    setIsDragging(true);
  };

  // Jab file ko area se bahar le jaate ho, bina drop kiye
  const handleDragLeave = () => {
    setIsDragging(false);
  };

  // Jab file ko area ke andar drop karte ho
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files?.[0]; // drag-drop ka apna "files" hota hai, input wala nahi
    if (droppedFile) handleFile(droppedFile);
  };

  // Normal click se file select karne ke liye (fallback)
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) handleFile(selectedFile);
  };

  return (
    <div className="max-w-md mx-auto mt-10 flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold">Drag & Drop Upload</h2>

      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`relative w-full h-56 border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors ${
          isDragging ? "border-blue-500 bg-blue-950/20" : "border-gray-500"
        }`}
      >
        {preview ? (
          <Image
            src={preview}
            alt="preview"
            width={128}
            height={128}
            className="object-contain p-2"
          />
        ) : (
          <>
            <span className="text-gray-400 text-sm">
              Image yahan drop karo ya click karo
            </span>
          </>
        )}

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      <button
        disabled={!file}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-gray-400"
      >
        Upload
      </button>
    </div>
  );
}