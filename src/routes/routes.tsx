import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import ErrorPage from "../pages/ErrorPage";
import { IndexPageLoader } from "../loaders/IndexPageLoader";
import { IndexPageActions  } from "../actions/IndexPageActions";

export default function routes() {
  const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
              index: true,
              element: <IndexPage />,
              loader: IndexPageLoader,
              action: IndexPageActions,
              errorElement: <ErrorPage />,
            }
        ]
    }
  ]);

  return <RouterProvider router={routes} />
}
