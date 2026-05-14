import React from 'react'
import NavBar from '../components/NavBar'
import Cart from '../components/Cart'

export default function CartView() {
  return (
    <>
    <NavBar/>
    <div className='container mt-2'>
        <Cart/>
    </div>
    </>
  )
}
