import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes"; // Path to the routes file

const App: React.FC = () => {
  // Disable right-click in production mode
  useEffect(() => {
    if (import.meta.env.MODE === "production") {
      document.addEventListener("contextmenu", (e) => e.preventDefault());
    }

    // Cleanup to avoid memory leaks
    return () => {
      if (import.meta.env.MODE === "production") {
        document.removeEventListener("contextmenu", (e) => e.preventDefault());
      }
    };
  }, []);
  
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;

