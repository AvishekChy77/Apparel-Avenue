import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import MyCart from "../Pages/MyCart/MyCart";
import ProductDetails from "../Pages/ProductDetails";
import Register from "../Pages/Register/Register";
import UpdateProduct from "../Pages/UpdateProduct";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../../Brand.json"),
      },
      {
        path: "/brand/:id",
        element: <BrandDetails></BrandDetails>,
        loader: () => fetch("../../Brand.json"),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoutes>
            <ProductDetails></ProductDetails>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/product"
          ),
      },
      {
        path: "/UpdateProduct/:id",
        element: (
          <PrivateRoutes>
            <UpdateProduct></UpdateProduct>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/AddProduct",
        element: (
          <PrivateRoutes>
            <AddProduct></AddProduct>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoutes>
            <MyCart></MyCart>
          </PrivateRoutes>
        ),
        loader: () =>
          fetch(
            "https://apparel-avenue-server-2yr8yuxal-avisheks-projects.vercel.app/user"
          ),
      },
    ],
  },
]);

export default router;
