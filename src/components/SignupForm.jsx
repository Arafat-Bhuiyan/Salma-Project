import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/icons/google.svg";
import apple from "../assets/icons/apple.svg";
import { useSignupMutation } from "@/Redux/Api/authApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/Redux/features/authSlice";
import { toast } from "react-toastify";
import { Eye, EyeOff } from "lucide-react";

export default function SignupForm() {
  const [profileName, setProfileName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ✅ RTK Query mutation hook
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { profileName, email, password });

    // Step 1️ Prepare payload according to backend fields
    const signupData = {
      full_name: profileName,
      email,
      password,
      date_of_birth: "2000-01-01", // dummy or replace with DOB input later
    };

    try {
      // Step 2️ Call RTK Query API
      const res = await signup(signupData).unwrap();
      console.log("Signup response:", res);

      // Step 3️ Save token in Redux + localStorage if available
      if (res?.access && res?.refresh) {
        dispatch(setCredentials(res));
        localStorage.setItem("auth", JSON.stringify(res));
      }

      // Step 4️ Success toast + redirect
      toast.success("Signup successful!");
      navigate("/"); // redirect to home/dashboard

      // Step 5️ Clear fields
      setProfileName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Signup error:", err);

      // Step 6️ Error handling
      if (err?.data?.email) {
        toast.error(err.data.email[0]);
      } else if (err?.data?.password) {
        toast.error(err.data.password[0]);
      } else {
        toast.error("Signup failed. Please try again!");
      }
    }
  };

  const terms = () => {
    navigate("/terms");
  };
  const privacy = () => {
    navigate("/privacy");
  };

  return (
    <div className="my-20 px-20 py-24 bg-[#1A0E1E]/70 backdrop-blur-sm shadow-[0_0_30px_0_#FF80EA80] rounded-2xl">
      <div className="relative z-10 w-[715px]">
        {/* ===== Header ===== */}
        <div className="flex flex-col items-center gap-1 mb-10">
          <h1 className="text-[#FFF9F9] text-3xl font-medium font-unbounded text-center">
            Create an account
          </h1>
          <p className="text-white text-base font-unbounded">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#FF80EB] underline hover:text-fuchsia-300 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* ===== Form ===== */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Profile Name */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-white text-base font-normal font-unbounded"
            >
              What should we call you?
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your profile name"
              value={profileName}
              onChange={(e) => setProfileName(e.target.value)}
              className="h-14 px-6 text-sm font-normal bg-transparent rounded-xl border-2 border-white text-white placeholder:text-[#666666]/60 font-unbounded focus:outline-none focus:border-[#FF80EB] transition-colors"
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-white text-base font-normal font-unbounded"
            >
              What’s your email?
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 px-6 text-sm font-normal bg-transparent rounded-xl border-2 border-white text-white placeholder:text-[#666666]/60 font-unbounded focus:outline-none focus:border-[#FF80EB] transition-colors"
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="password"
              className="text-white text-base font-normal font-unbounded"
            >
              Create a password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 w-full px-6 pr-12 text-sm font-normal bg-transparent rounded-xl border-2 border-white text-white placeholder:text-[#666666]/60 font-unbounded focus:outline-none focus:border-[#FF80EB] transition-colors"
                pattern="(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}"
                title="Use 8 or more characters with a mix of letters, numbers & symbols"
                required
              />

              {/* Eye / EyeOff icon */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff color="#666666CC" />
                ) : (
                  <Eye color="#666666CC" />
                )}
              </button>
            </div>

            <p className="text-white text-sm font-normal font-unbounded mt-1">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </p>
          </div>

          {/* Terms & Button */}
          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                required
                className="w-4 h-4 accent-[#FF80EB] rounded"
              />
              <label
                htmlFor="terms"
                className="text-[#666666] text-base font-unbounded"
              >
                By creating an account, you agree to the{" "}
                <span
                  onClick={terms}
                  className="text-[#FF80EB] underline cursor-pointer"
                >
                  Terms of Use
                </span>{" "}
                and{" "}
                <span
                  onClick={privacy}
                  className="text-[#FF80EB] underline cursor-pointer"
                >
                  Privacy Policy
                </span>
                .
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-[#FF80EB] active:bg-[#C12E83] text-white text-base font-unbounded rounded-lg transition-all shadow-lg hover:shadow-[#FF80EB]/50"
            >
              Sign up
            </button>
          </div>
        </form>

        {/* ===== OR Section ===== */}
        <div className="flex flex-col items-center gap-4 mt-12">
          <p className="text-[#666666] text-2xl font-unbounded">
            OR Continue with
          </p>

          <div className="flex gap-10">
            {/* Google */}
            <button className="w-80 h-16 flex items-center justify-center gap-4 rounded-[40px] border border-[#FF80EB] hover:bg-[#FF80EB] hover:border-none active:border-none active:bg-[#C12E83] text-white text-xl font-unbounded transition-all">
              <img src={google} alt="Google Logo" className="w-6 h-6" />
              Google
            </button>

            {/* Apple */}
            <button className="w-80 h-16 flex items-center justify-center gap-4 rounded-[40px] border border-[#FF80EB] hover:bg-[#FF80EB] hover:border-none active:border-none active:bg-[#C12E83] text-white text-xl font-unbounded  transition-all">
              <img src={apple} alt="Google Logo" className="w-7 h-7" />
              Apple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
