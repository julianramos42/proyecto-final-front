import IndexLayout from "../layouts/IndexLayout";
import Contact from "./Contact/Contact";
import Custmers from "./Customers/Customers";
import ContactCustoms from "./ContactCustomers/ContactCustomers";
import Profile from "./Profile/Profile";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [{ path: "/", element: <Profile /> }],
  },
]);
