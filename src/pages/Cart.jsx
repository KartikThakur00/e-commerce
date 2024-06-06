import { useContext } from "react"
import { CartContext } from "@/components/Context"
import { Link } from "react-router-dom"
import { RiDeleteBin6Line } from 'react-icons/ri'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)

    const TotalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

    console.log(cart)
    return (
        <div className="bg-gray-100 rounded-2xl">
            <h1 className="text-center text-xl p-3">Cart</h1>
            <div className="flex flex-col justify-center gap-4 mt-2">
                {cart.map((item) => {
                    return (
                        <div key={item.id} className="w-10/12 flex items-center justify-between p-2 py-1 pr-4 rounded-2xl shadow-md  m-auto gap-2">
                            <img src={item.image} alt={item.title} className="w-[100px] object-contain aspect-4/3 p-4 rounded-xl -mb-2 shadow-md" />
                            <div className="w-full flex flex-col items-center justify-between my-2 mx-3">
                                <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full px-2 font-medium mt-4 ">{item.title}</p>
                                <p className="w-full my-2 text-green-600 text-left px-2 font-medium ">x {item.quantity} </p>
                            </div>
                            <p className="min-w-fit text-left font-bold ">$ {item.price} </p>
                            <RiDeleteBin6Line
                                onClick={() => setCart(cart.filter((cartItem) => cartItem.id !== item.id))}
                                className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[28px]"
                            />
                        </div>
                    )
                })}
            </div>
            <div className="w-10/12 flex flex-col p-4 m-auto">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Total Price: </p>
                    <p className="text-center px-2 py-1 bg-purple-100 max-w-fit rounded-2xl font-bold">$ {TotalPrice.toFixed(2)}</p>
                </div>
                <Link to="/checkout" className="w-10/12 lg:w-40 p-2 mt-4 bg-[#111827] text-white rounded-2xl m-auto text-center cursor-pointer">Checkout</Link>
            </div>
        </div>
    )
}

export default Cart