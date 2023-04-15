import IndexLayout from "../layouts/IndexLayout";
import Index from "./Index/Index";
import StoresView from "./StoresView/StoresView";
import MyStore from "./MyStore/MyStore";
import Profile from "./Profile/Profile"
import Favourites from "./Favourites/Favourites"
import OneStore from './OneStore/OneStore'
import OneProduct from './OneProduct/OneProduct'

import AdminLayout from '../layouts/AdminLayout'
import AdminStores from "./AdminStores/AdminStores";
import AdminUsers from "./AdminUsers/AdminUsers";
import AdminProducts from './AdminProducts/AdminProducts'

import Verify from "./Verify/Verify";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            { path: '/', element: <Index /> },
            { path: '/shops', element: <StoresView /> },
            { path: '/myshop', element: <MyStore/> },
            { path: "/profile", element: <Profile /> },
            { path: "/favourites", element: <Favourites /> },
            { path: '/shop/:shopId', element: <OneStore/> },
            { path: '/shop/:shopId/product/:productId', element: <OneProduct/> },
            { path: '/verify/:verify_code', element: <Verify/> },
        ]
    },
    {
        path: '/',
        element: <AdminLayout/>,
        children: [
            { path: '/admin/shops', element: <AdminStores/> },
            { path: '/admin/users', element: <AdminUsers/> },
            { path: '/admin/products', element: <AdminProducts/> },
        ]
    }
])