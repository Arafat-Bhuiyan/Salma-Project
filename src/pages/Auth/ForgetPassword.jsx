// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function ForgetPassword() {
//   const navigate = useNavigate();
//   const [email, setEmail] = React.useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // TODO: implement OTP sending logic
//     console.log("Sending OTP to:", email);
//     navigate("/auth/verify-otp", { state: { email } });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="w-full max-w-[70vw] ">
//         <div className="bg-[#1A0E1E] flex justify-center items-center  min-h-screen border border-[#333] rounded-md p-10 shadow-sm">
//           <div className="w-1/2">
//             <div className="flex justify-center  mb-6">
//               <div className="text-white font-bold text-2xl tracking-widest">
//                 <div className="text-center  text-white text-4xl font-bold  [text-shadow:_0px_0px_20px_rgb(255_57_176_/_1.00)]">
//                   Forget Password
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className=" text-white">Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   placeholder="Enter your email"
//                   className="mt-2 w-full bg-transparent border border-[#3a3a3a] rounded px-3 py-2 text-white"
//                   required
//                 />
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#FF39B0] text-white rounded py-2 mt-3 font-bold"
//                 >
//                   Get OTP
//                 </button>
//               </div>
//             </form>

//             <div className="!mt-5">
//               <div className="text-center">
//                 <span className="text-white text-base font-normal ">
//                   Remember your password?{" "}
//                 </span>
//                 <Link
//                   to="/auth/login"
//                   className="text-pink-500 text-base font-medium underline"
//                 >
//                   Log in
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
