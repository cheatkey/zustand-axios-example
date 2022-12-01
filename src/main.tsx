import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ZustandAsyncExample from "./pages/ZustandAsyncExample";

const router = createBrowserRouter([
  {
    path: "/zustand-intro",
    // element: <p>hello</p>,
    // loader: rootLoader,
    children: [
      {
        path: "/zustand-intro/async",
        element: <ZustandAsyncExample />,
        // loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<></>} />
  </React.StrictMode>
);
