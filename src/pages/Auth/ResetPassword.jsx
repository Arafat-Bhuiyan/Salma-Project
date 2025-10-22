// import React from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";

// export default function ResetPassword() {
//   const navigate = useNavigate();
//   const [password, setPassword] = React.useState("");
//   const [confirmPassword, setConfirmPassword] = React.useState("");
//   const [showPassword, setShowPassword] = React.useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }
//     // TODO: implement password update logic
//     console.log("Updating password");
//     navigate("/auth/login", { replace: true });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center ">
//       <div className="w-full max-w-[70vw] ">
//         <div className="bg-[#1A0E1E] flex justify-center items-center  min-h-screen border border-[#333] rounded-md p-10 shadow-sm">
//           <div className="w-1/2">
//             <div className="flex justify-center  mb-6">
//               <div className="text-white font-bold text-2xl tracking-widest">
//                 <div className="text-center  text-white text-4xl font-bold  [text-shadow:_0px_0px_20px_rgb(255_57_176_/_1.00)]">
//                   Reset Password
//                 </div>
//               </div>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               <div>
//                 <label className=" text-white">Create a password</label>
//                 <div className="relative mt-2">
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="●●●●●●"
//                     className="w-full bg-transparent border border-[#3a3a3a] rounded px-3 py-2 text-white placeholder-gray-500"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword((s) => !s)}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 "
//                     aria-label="Toggle password visibility"
//                   >
//                     <span className="text-white">
//                       {showPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <label className=" mt-3 text-white">Confirm password</label>
//                 <div className="relative mt-2">
//                   <input
//                     type={showConfirmPassword ? "text" : "password"}
//                     value={confirmPassword}
//                     onChange={(e) => setConfirmPassword(e.target.value)}
//                     placeholder="●●●●●●"
//                     className="w-full bg-transparent border border-[#3a3a3a] rounded px-3 py-2 text-white placeholder-gray-500"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword((s) => !s)}
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 "
//                     aria-label="Toggle confirm password visibility"
//                   >
//                     <span className="text-white">
//                       {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
//                     </span>
//                   </button>
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="w-full bg-[#FF39B0] text-white rounded py-2 mt-3 font-bold"
//                 >
//                   Update Password
//                 </button>
//               </div>
//             </form>

//             <div className="!mt-5">
//               <div className="text-end">
//                 <span className="text-white text-base font-normal ">
//                   Back to{" "}
//                 </span>
//                 <Link
//                   to="/auth/login"
//                   className="text-[#C0FF4C] text-base font-medium underline"
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
