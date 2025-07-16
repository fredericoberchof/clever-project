"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormField from "./FormField";
import Logo from "../ui/Logo";
import { getPasswordError } from "@/utils/validation";

export default function SignInForm() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (hasInteracted) {
      setPasswordError(getPasswordError(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setHasInteracted(true);
    
    const error = getPasswordError(password);
    setPasswordError(error);
    
    if (error) return;

    setIsSubmitting(true);
    localStorage.setItem("isAuth", "true");

    setTimeout(() => {
      router.push("/photos");
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-start md:items-center justify-center bg-white px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-xs"
      >
        <div className="mt-[36px] md:mt-0">
          <Logo />
        </div>

        <h1 className="mt-[24px] text-[20px] font-bold text-center">
          Sign in to your account
        </h1>

        <FormField
          label="Username"
          value={username}
          onChange={setUsername}
          placeholder="Enter your username"
          className="mt-[40px]"
        />

        <div className="w-full flex justify-between items-center mt-[23px]">
          <span className="text-[14px] font-bold">Password</span>
          <span className="text-[14px] font-normal text-blue-600 cursor-pointer">
            Forgot password?
          </span>
        </div>

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
          required
          aria-label="Password"
          className={`w-full h-[44px] px-4 border rounded-lg mt-[11px] text-[14px]
            focus:outline-none focus:ring-2 ${passwordError ? "border-red-500 focus:ring-red-500" : "border-gray-400 focus:ring-blue-500"}`}
        />

        {passwordError && (
          <p className="w-full text-red-600 text-[12px] mt-2">{passwordError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-[44px] bg-[#0075EB] text-white font-bold rounded-lg mt-6 cursor-pointer
            hover:bg-blue-700 transition-colors"
        >
          {isSubmitting ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
}