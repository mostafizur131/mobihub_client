import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Category from "../Pages/Products/Category/Category";
import BuyerSignUp from "../Pages/SignUp/BuyerSignUp BuyerSignUp/BuyerSignUp";
import SellerSignUp from "../Pages/SignUp/SellerSignUp/SellerSignUp";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import PrivetRoute from "./PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/logIn",
        element: <Login></Login>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivetRoute>
            <Category></Category>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
    children: [
      {
        path: "/signUp",
        element: <BuyerSignUp></BuyerSignUp>,
      },
      {
        path: "/signUp/buyer",
        element: <BuyerSignUp></BuyerSignUp>,
      },
      {
        path: "/signUp/seller",
        element: <SellerSignUp></SellerSignUp>,
      },
    ],
  },
]);

export default router;
