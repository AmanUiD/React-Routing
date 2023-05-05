import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Rootlayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <Rootlayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'product', element: <Products /> },
        { path: 'about', element: <About /> },
        { path: 'product/:productId', element: <ProductDetail /> }
      ],
    },
  ])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
