// import { InputOTP, InputOTPSlot } from "@/components/input-otp";
// import React, { useEffect, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";

// export default function VerifyOtp() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const email = location.state?.email || "example@gmail.com";

//   const [otp, setOtp] = useState("");
//   const [timeLeft, setTimeLeft] = useState(300); // 5 minutes

//   // Countdown timer
//   useEffect(() => {
//     if (timeLeft <= 0) return;
//     const timer = setTimeout(() => setTimeLeft((prev) => prev - 1), 1000);
//     return () => clearTimeout(timer);
//   }, [timeLeft]);

//   // Format time (MM:SS)
//   const formatTime = (seconds) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, "0")}`;
//   };

//   // Handle Verify
//   const handleVerify = (e) => {
//     e.preventDefault();
//     console.log("Verifying OTP:", otp);
//     navigate("/auth/reset-password", { replace: true });
//   };

//   // Handle Reset Code
//   const handleReset = () => {
//     console.log("Resetting OTP...");
//     setTimeLeft(300);
//     // TODO: send a new OTP request to the backend
//   };

//   // Gradient border style (reusable)
//   const gradientBorder = {
//     border: "1px solid transparent",
//     borderImage: "linear-gradient(360deg, #FF39B0, #C0FF4C) 1",
//     borderRadius: "10px",
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#0E0E10]">
//       <div className="w-full max-w-[70vw]">
//         <div className="bg-[#1A0E1E] flex justify-center items-center min-h-screen border border-[#333] rounded-md p-10 shadow-sm">
//           <div className="w-1/2">
//             {/* Header */}
//             <div className="text-center mb-6">
//               <h1 className="text-white text-4xl font-bold [text-shadow:_0px_0px_20px_rgb(255_57_176_/_1.00)]">
//                 Verify Identity
//               </h1>
//               <p className="mt-2 text-white text-xl font-normal">
//                 Please input the verification code sent to your email <br />
//                 <span className="text-pink-400">{email}</span>
//               </p>
//             </div>

//             {/* OTP Form */}
//             <form onSubmit={handleVerify} className="space-y-5">
//               <div className="flex justify-center">
//                 <InputOTP
//                   maxLength={5}
//                   value={otp}
//                   onChange={setOtp}
//                   containerClassName="gap-4"
//                 >
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <InputOTPSlot
//                       key={i}
//                       index={i}
//                       style={gradientBorder}
//                       className="relative flex h-12 w-12 items-center justify-center text-lg text-white transition-all bg-[#1A0E1E] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#FF39B0]/50"
//                     />
//                   ))}
//                 </InputOTP>
//               </div>

//               {/* Countdown Timer */}
//               <div className="flex justify-end text-white font-medium">
//                 {formatTime(timeLeft)}
//               </div>

//               {/* Buttons */}
//               <div className="flex flex-col space-y-4">
//                 <button
//                   type="submit"
//                   className="w-full bg-[#FF39B0] hover:bg-[#ff55c1] text-white rounded py-2 font-bold transition-all"
//                 >
//                   Verify Code
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleReset}
//                   className="w-full bg-transparent border border-[#3a3a3a] hover:border-[#FF39B0] text-white rounded py-2 font-bold transition-all"
//                 >
//                   Reset Code
//                 </button>
//               </div>
//             </form>

//             {/* Footer */}
//             <div className="mt-5 text-center">
//               <span className="text-white text-base">
//                 Remember your password?{" "}
//               </span>
//               <Link
//                 to="/auth/login"
//                 className="text-pink-500 text-base font-medium underline"
//               >
//                 Log in
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
