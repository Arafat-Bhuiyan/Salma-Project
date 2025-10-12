import LoginForm from "@/components/LoginForm";
import bgImage from "@/assets/images/loginBg.png";

export default function Login() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-full z-0 bg-cover"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <LoginForm />
      </div>
    </div>
  );
}
