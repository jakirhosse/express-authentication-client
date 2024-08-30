import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import SignUp from "../componentes/Home/signUp/signUp";
import Login from "../componentes/Home/Login/Login";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
