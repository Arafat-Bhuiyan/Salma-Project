import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "@/pages/Auth/Signup";
import About from "@/pages/About/About";
import Dispatches from "@/pages/Dispatches/Dispatches";
import Vaults from "@/pages/Vaults/Vaults";
import { VaultDetail } from "@/pages/Vaults/VaultDetail";
import PrivacyPolicy from "@/pages/Terms&Privacy/Privacy";
import TermsConditions from "@/pages/Terms&Privacy/Terms";
import Contact from "@/pages/Contact/Contact";
import ContentDetails from "@/pages/Content/ContentDetails";
import ContentLibrary from "@/pages/Content/ContentLibrary";
import AboutUsDetails from "@/pages/About/AboutUsDetails";
import OurMission from "@/pages/About/OurMission";
// import ForgetPassword from "@/pages/Auth/ForgetPassword";
// import VerifyOtp from "@/pages/Auth/VerifyOTP";
// import ResetPassword from "@/pages/Auth/ResetPassword";
// import Welcome from "@/pages/Auth/Welcome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <h2 className="text-red-500 text-center mt-10">Route not found</h2>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "content", element: <ContentLibrary /> },
      { path: "vaults", element: <Vaults /> },
      { path: "vault-detail", element: <VaultDetail /> },
      { path: "dispatches", element: <Dispatches /> },
      { path: "about", element: <About /> },
      { path: "about-us-details", element: <AboutUsDetails /> },
      { path: "our-mission", element: <OurMission /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "terms", element: <TermsConditions /> },
      { path: "contact", element: <Contact /> },
      { path: "content-details/:id", element: <ContentDetails /> },
      // auth routes
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      // {
      //   path: "forget-password",
      //   element: <ForgetPassword />,
      // },
      // {
      //   path: "verify-otp",
      //   element: <VerifyOtp />,
      // },
      // {
      //   path: "reset-password",
      //   element: <ResetPassword />,
      // },
      // {
      //   path: "welcome",
      //   element: <Welcome />,
      // },
    ],
  },
]);

export default router;
