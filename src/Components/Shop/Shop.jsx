import React from 'react'
import Cart from '../cart/Cart'
import Stand from '../Standard/Stand'
import { Outlet } from 'react-router-dom'

export default function Shop() {
  return (
    <div> 
     <Outlet/>
     </div>
  )
}
