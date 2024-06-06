import { useContext, useEffect, useState } from "react";
import fakeData from "@/data/data.json";
import { CartContext } from "@/components/Context";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";


const Home = () => {
    const [data, setData] = useState([])
    const [quantity, setQuantity] = useState(1)
    const { cart, setCart } = useContext(CartContext)

    useEffect(()=>{
        setData(fakeData.data)
    },[])

    const handleCart = (item, quantity) => {
        setCart(cart => [...cart, { ...item, quantity }]);
        setQuantity(1)
    }

    // console.log(data)
    // console.log("cart :", cart)
    // console.log(quantity)
    return (
        <section className='h-full'>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
                {data.map((item) => {
                    return (
                        <div key={item.id} className="w-[300px] flex flex-col items-center  p-4 rounded-2xl shadow-md mb-8">
                            <img src={item.image} alt={item.title} className=" object-contain aspect-4/3 p-4 rounded-xl -mt-8 shadow-md" />
                            <p className="text-ellipsis whitespace-nowrap overflow-hidden w-full px-2 font-medium mt-4 ">{item.title}</p>
                            <div className="w-full flex items-center  justify-between my-2 mx-3 ">
                                <p className="w-full my-2 text-green-600 text-left font-medium ">$ {item.price} </p>
                                <Dialog>
                                    <DialogTrigger>
                                        <span className="w-max px-4 py-2 rounded-xl text-white bg-purple-600">View</span>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                {item.title}
                                            </DialogTitle>
                                            <DialogDescription>
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex flex-col gap-3 p-2">
                                            <div className="flex p-2">
                                                <img src={item.image} alt={item.title} className="w-[200px] object-contain aspect-4/3 p-4 rounded-xl shadow-md" />
                                                <p className="m-3 text-pretty">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex justify-between p-2">
                                                <Input type="number" onChange={e => setQuantity(e.target.value)} className="w-32" placeholder="Quantity 1" /><DialogClose asChild>
                                                    <Button onClick={() => handleCart(item, quantity)}>
                                                        Add to Cart
                                                    </Button>
                                                </DialogClose>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>
                    )
                })}
            </div>

        </section>
    )
}

export default Home