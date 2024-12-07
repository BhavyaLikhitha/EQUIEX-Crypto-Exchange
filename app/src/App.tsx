import React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes"; // Path to the routes file

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;

