import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin'
import NavBarAdmin from '../components/NavBarAdmin/NavBarAdmin'

export default function AdminLayout() {
    return (
        <>
            <HeaderAdmin />
            <NavBarAdmin/>
            <Outlet />
        </>
    )
}
