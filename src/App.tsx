import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import CreateProduct from "./pages/CreateProduct";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/products/:productId",
        Component: SingleProduct,
      },
      {
        path: "/create-product",
        Component: CreateProduct,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
