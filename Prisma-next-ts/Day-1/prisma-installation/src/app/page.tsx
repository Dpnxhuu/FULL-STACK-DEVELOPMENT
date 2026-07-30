"use client";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!name && !email) return;

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email }),
    });

    
    if (res.ok) {
      const data = await res.json();
      console.log("Created:", data);
      alert("User created!");
    }

    setName("");
    setEmail("");
  }

  async function handleDelete() {
  const id = prompt("Enter user ID to delete:")

  if(!id) return;

  const res = await fetch('/api/users', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: Number(id) })
  })

  const data = await res.json()
  console.log('Deleted:', data)
  alert('User deleted!')
}

  return (
    <form onSubmit={handleSubmit} className="p-5 border flex gap-4">
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
      <button onClick={handleDelete}>Delete User</button>
    </form>
  );
}
