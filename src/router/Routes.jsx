import { Layout } from "@/layouts/Layout";
import { Home } from "@/pages/Home/Home";
import Login from "@/pages/Auth/Login";
import { createBrowserRouter } from "react-router-dom";
import SignUp from "@/pages/Auth/Signup";
import { Database } from "@/pages/Database/Database";
import About from "@/pages/About/About";

// Dummy pages for testing
const Vaults = () => <div className="p-6 text-white text-2xl">Vaults Page</div>;
const Dispatches = () => (
  <div className="p-6 text-white text-2xl">Dispatches Page</div>
);
const Contact = () => (
  <div className="p-6 text-white text-2xl">Contact Page</div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <h2 className="text-red-500 text-center mt-10">Route not found</h2>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "database", element: <Database /> },
      { path: "vaults", element: <Vaults /> },
      { path: "dispatches", element: <Dispatches /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
    ],
  },
]);

export default router;
