import LoginForm from "@/components/LoginForm";
import bgImage from "@/assets/images/loginBg.png";
import { ScrollRestoration } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <ScrollRestoration />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 my-32">
        <LoginForm />
      </div>
    </div>
  );
}
