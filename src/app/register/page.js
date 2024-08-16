"use client";
import Image from "next/image";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleFormSubmit(ev) {
    ev.preventDefault();
    fetch("api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {'Content-Type': 'application/json'},
    });
  }
  return (
    <section className="mt-8">
      <h1 className="text-center text-primary text-4xl uppercase italic mb-4">
        Đăng ký
      </h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button type="submit">Đăng ký</button>
        <div className="my-4 text-center text-gray-500 italic text-sm">
          hoặc đăng nhập bằng
        </div>
        <button className="flex gap-4 justify-center">
          <Image
            src={"/google_icon.png"}
            alt={"google icon"}
            width={24}
            height={24}
          />
          Đăng nhập với Google
        </button>
      </form>
    </section>
  );
}
