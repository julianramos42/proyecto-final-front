import IndexLayout from "../layouts/IndexLayout";
import Index from "./Index/Index";

import { createBrowserRouter } from "react-router-dom";
import StoresView from "./StoresView/StoresView";
import MyStore from "./MyStore/MyStore";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [{ path: "/", element: <MyStore /> }],
  },
]);
