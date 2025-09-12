import React, { useContext, useState } from 'react'
import Nav from '../components/Nav'
import categories from '../categories'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/userContext'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {
    let { cate, setCate, input, showCart, setShowCart } = useContext(dataContext)
    let items = useSelector((state) => state.cart)

    const filter = (category) => {
        setCate(category === "All" ? food_items : food_items.filter((item) => item.food_category === category))
    }
    let subtotal = items.reduce((total, item) => {
        return total + (item.qty * item.price)
    }, 0)
    console.log(subtotal);
    let deliveryFee = 20;
    let taxes = subtotal * 0.5 / 100
    let total = Math.floor(subtotal + deliveryFee + taxes);
    return (
        <div className='w-full bg-slate-200 min-h-screen'>
            <Nav />
            {!input ?
                <div className='flex flex-wrap justify-center items-center gap-6 w-[100%]'>
                    {categories.map((item) => (
                        <h1 key={item.id} tabIndex="0" className='w-[140px] h-[150px] bg-white flex flex-col-reverse 
                     items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-2xl  focus:bg-green-200 cursor-pointer transition-all duration-200 select-none' onClick={() => filter(item.name)}>
                            {item.name}
                            {item.icon}
                        </h1>
                    )
                    )}
                </div> : null}

            <div className='w-full flex flex-wrap gap-5 justify-center items-center pt-8 pb-8'>
             {cate.length > 1 ?    cate.map((item) => (
                    <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
                )) : <div className='text-2xl font-semibold text-green-500 pt-5'>No dish found!</div> }
            </div>
            <div className={`w-full md:w-[40vw] h-[100%] fixed bg-white top-0 right-0 flex flex-col items-center shadow-xl p-6 transition-all duration-500 overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>
                <header className='w-[100%] flex justify-between items-center'>
                    <span className='text-green-400 text-[18px] font-semibold '>Order items</span>
                    <RxCross2 className='w-[30px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' onClick={() => setShowCart(false)} />
                </header>
                {items.length > 0 ? <>  <div className='w-full mt-9 flex flex-col gap-8 ' >
                    {items.map((item) => (

                        <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
                    ))}
                </div>
                    <div className='w-full border-t-2 border-gray-400 border-b-2 mt-7 flex flex-col gap-2 p-8'>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg font-semibold text-gray-600'>Subtotal</span>
                            <span className='text-green-400 text-lg font-semibold'>RS {subtotal}/-</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg font-semibold text-gray-600'>Delivery Fee</span>
                            <span className='text-green-400 text-lg font-semibold'>RS {deliveryFee}/-</span>
                        </div>
                        <div className='w-full flex justify-between items-center'>
                            <span className='text-lg font-semibold text-gray-600'>Taxes</span>
                            <span className='text-green-400 text-lg font-semibold'>RS {taxes}/-</span>
                        </div>

                    </div>
                    <div className='w-full flex justify-between items-center p-9'>
                        <span className='text-2xl font-semibold text-gray-600'>Total</span>
                        <span className='text-green-400 text-lg font-semibold'>RS {total}/-</span>
                    </div>
                    <button className='w-[80%] p-3 bg-green-300 rounded-lg text-gray-700 hover:bg-green-200 transition-all duration-200 cursor-pointer' onClick={()=> toast.success("Order Place")}>Place Order</button>
                </> : <div className='text-center text-2xl text-green-500 font-semibold pt-5'> Empty Cart...</div>}
            </div>
        </div>
    )
}

export default Home