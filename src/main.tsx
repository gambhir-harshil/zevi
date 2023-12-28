import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from "./pages/Products.tsx";
import Page404 from "./pages/Page404.tsx";
import AppLayout from "./components/AppLayout.tsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
  { path: "/products", element: <ProductsPage /> },
  { path: "*", element: <Page404 /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
