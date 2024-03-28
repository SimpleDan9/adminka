import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <div className='p-5 bg-blue-400'>

            </div>
            <div className='flex'>
                <ul className='h-screen bg-blue-400 p-5 w-[300px]'>
                <li className='p-5'>
                        <Link to="/app">Home</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/app/category">Category</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/app/banner">Banners</Link>
                    </li>
                    <li className='p-5'>
                        <Link to="/app/product">Product</Link>
                    </li>
                   
                </ul>
                <div className='flex-grow p-5'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AppLayout

