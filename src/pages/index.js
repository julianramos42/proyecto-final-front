import IndexLayout from "../layouts/IndexLayout";
import Index from "./Index/Index";
import StoresView from "./StoresView/StoresView";
import MyStore from "./MyStore/MyStore";
import Profile from "./Profile/Profile"
import Favourites from "./Favourites/Favourites"

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/shops", element: <StoresView /> },
      { path: "/myshop", element: <MyStore /> },
      { path: "/profile", element: <Profile /> },
      { path: "/favourites", element: <Favourites /> },
    ],
  },
]);
