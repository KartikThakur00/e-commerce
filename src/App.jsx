import { useState } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { CartContext } from './components/Context'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
)

function App() {
  const [cart, setCart] = useState([])

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <RouterProvider router={router} />
      </CartContext.Provider>
    </>
  )
}

export default App
