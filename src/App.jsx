import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Layout from "./components/layout/Layout";
import { ProductProvider } from "./components/context/ProductContext";
import { ThemeProvider } from "./components/context/ThemeContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/singleproduct/:id",
          element: <SingleProduct />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return (
    <>
      <ThemeProvider>
        <ProductProvider>
          <RouterProvider router={router} />
        </ProductProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
