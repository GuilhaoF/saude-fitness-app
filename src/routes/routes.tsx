import { createBrowserRouter } from "react-router-dom";
import { Diet } from "../pages/diet/diet";
import { Home } from "../pages/home/home";
import { Options } from "../pages/options/options";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/formOptions",
    element: <Options />,
  },
  {
    path: "/dietIntelligent",
    element: <Diet />,
  },
]);
