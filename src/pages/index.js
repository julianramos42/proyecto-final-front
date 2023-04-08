import IndexLayout from '../layouts/IndexLayout'
import Index from './Index/Index'
import StoresView from './StoresView/StoresView'
import MyStore from './MyStore/MyStore'
import OneStore from './OneStore/OneStore'
import OneProduct from './OneProduct/OneProduct'

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <IndexLayout />,
        children: [
            { path: '/', element: <Index /> },
            { path: '/shops', element: <StoresView /> },
            { path: '/myshop', element: <MyStore/> },
            { path: '/shop/:shopId', element: <OneStore/> },
            { path: '/shop/:shopId/product/:productId', element: <OneProduct/> },
        ]
    },
])
