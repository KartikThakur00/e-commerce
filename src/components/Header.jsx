import { Link } from 'react-router-dom'
import Nav from './Nav'
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from 'react-redux';

const Header = () => {
  const cartState = useSelector((state) => state.cart.cart);
  return (
    <div className=" my-3">
      <div className="container mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className='font-mono font-semibold text-2xl text-purple-500'>SHOPPER</Link>

        {/* nav  */}
        <div className="hidden  sm:flex items-center gap-8">
          <Nav />
        </div>

        {/* cart */}
        <div className="">
          <Link to="/cart" className="text-2xl text-purple-500 relative"><FiShoppingCart />
            {cartState.length > 0 && (
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-purple-600 absolute -top-4 left-4 md:left-5 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                {cartState.length}
              </div>
            )}
          </Link>
        </div>

      </div>

    </div>
  )
}

export default Header