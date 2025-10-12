"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", { email, password });
    // ✅ Clear input fields after submit
    setEmail("");
    setPassword("");
  };

  return (
    <div
      className="my-40 p-32 bg-[#1A0E1E]/70 backdrop-blur-sm shadow-[0_0_30px_0_#FF80EA80]
"
    >
      <div className="relative z-10 w-[600px] h-[494px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-1 mb-12">
          <h1 className="text-[#FFF9F9] text-3xl font-medium font-unbounded text-center">
            Welcome back
          </h1>
          <p className="text-[#F4F4F4] text-2xl font-normal font-poppins text-center">
            We're so excited to see you again!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Email Field */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-white text-base font-normal font-poppins"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-4 bg-transparent rounded-xl border-2 border-white text-white font-poppins focus:outline-none focus:border-[#FF80EB] transition-colors"
              required
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="text-white text-base font-normal font-poppins"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 px-4 bg-transparent rounded-xl border-2 border-white text-white font-poppins focus:outline-none focus:border-[#FF80EB] transition-colors"
                required
              />
            </div>
            <a
              href="#"
              className="text-[#FF80EB] text-base font-medium font-poppins underline hover:text-fuchsia-300 transition-colors"
            >
              Forget your password
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full h-14 mt-4 bg-[#FF80EB] active:bg-[#C12E83] text-white text-lg font-medium font-poppins rounded-xl transition-all shadow-lg hover:shadow-[#FF80EB]/50"
          >
            Log in
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-[#666666] text-base font-poppins mt-2">
            Don't have an acount?{" "}
            <Link
              to="/signup"
              className="text-[#FF80EB] font-medium underline hover:text-fuchsia-300 transition-colors"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
