import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./router/Routes.jsx";
import { Provider } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import { store } from "./Redux/Stores/store";
import { ToastContainer } from "react-toastify";

// Initialize AOS globally
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
