import SignupForm from "@/components/SignupForm";
import bgImage from "@/assets/images/loginBg.png";
import { ScrollRestoration } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <ScrollRestoration />
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-0 bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <SignupForm />
      </div>
    </div>
  );
}
