import { useEffect} from 'react'
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
import { useDispatch } from 'react-redux'
import { fetchProducts } from './features/product/productSlice'


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

  const dispatch = useDispatch()

  // fetch data from api and send it to the store
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
