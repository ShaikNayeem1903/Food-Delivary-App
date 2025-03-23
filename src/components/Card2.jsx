import React, { useState } from 'react'
import image1 from '../assets/image1.avif'
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrementQnt, incrementQnt, remove } from '../pages/cartSlice';
import { toast } from 'react-toastify';

function Card2() {

  const [count, setCount] = useState(1)

  const data = useSelector(state => state.cart);
  const dispatch = useDispatch();

  let subTotal = data.reduce((total, data) => total + data.price, 0);
  let taxes = Math.round(subTotal * 0.5 / 100);
  let delivaryFee = 20;
  let total = subTotal + taxes + delivaryFee;




  return (

    <>


      {
        data.map((items) => (
          
            <div key={items.id} className='w-full h-[100px] bg-white p-5 flex justify-between items-center shadow-lg rounded-md mt-4'>
              <div className=' w-[60%] h-full flex items-center gap-7'>
                <div className='w-[35%] h-full overflow-hidden rounded-lg shadow-xl'>
                  <img className=' object-cover' src={items.image} alt="" />
                </div>

                <div className="w-[40%] f-full flex flex-col gap-1">
                  <div className='text-lg text-gray-600 font-semibold'>{items.name}</div>

                  <div className='w-[70px] h-[25px] bg-slate-100 border-2 border-green-200 rounded-lg overflow-hidden flex text-green-400 font-semibold '>
                    <button className='w-[40%] h-full flex justify-center items-center bg-white hover:bg-gray-200' onClick={() => items.qnt > 1 ? dispatch(decrementQnt(items.id)) : 1}>-</button>
                    <span className=' w-[20%] h-full flex justify-center items-center'>{items.qnt}</span>
                    <button className='w-[40%] h-full flex justify-center items-center bg-white hover:bg-gray-200' onClick={() => dispatch(incrementQnt(items.id))}>+</button>
                  </div>
                </div>


              </div>

              <div className=' w-[40%] h-full '>
                <div className='flex  flex-col justify-start items-end gap-2'>
                  <span className='text-green-500 text-lg font-semibold'>{items.price * items.qnt}</span>
                  <RiDeleteBin5Line className='text-red-500 text-lg cursor-pointer hover:text-red-300' onClick={() => {dispatch(remove(items.id));toast.error(`${items.name} removed`)}} />
                </div>

              </div>



            </div>




            ))
          
        }





      {data.length > 0 ?
        <>
          <div className=' w-full mt-8 border-t-2 border-b-2 flex flex-col gap-3 border-gray-400 '>

            <div className='flex justify-between mt-5  px-2'>
              <span className='text-xl font-semibold'>Subtotal</span>
              <span className='text-xl text-green-400 font-semibold'>Rs {subTotal}/-</span>
            </div>

            <div className='flex justify-between  px-2'>
              <span className='text-xl font-semibold'>Delivary Fee</span>
              <span className='text-xl text-green-400 font-semibold'>Rs {delivaryFee}/-</span>
            </div>

            <div className='flex justify-between mb-3 px-2'>
              <span className='text-xl font-semibold'>Tax</span>
              <span className='text-xl text-green-400 font-semibold'>Rs {taxes}/-</span>
            </div>


          </div>

          <div className='w-full mt-4'>
            <div className='flex justify-between  px-2'>
              <span className='text-xl font-bold'>Total</span>
              <span className='text-xl text-green-400 font-semibold'>Rs {total}/-</span>
            </div>
          </div>





          <div className='w-full h-200px flex justify-center mt-16'>
            <div className=' w-[80%] p-2 hover:bg-green-300 transition-all duration-300 rounded-lg text-xl font-semibold bg-green-500 text-white flex justify-center'>
              <button className='cursor-pointer' onClick={()=>toast.success("Order placed...")}>Place Order</button>
            </div>
          </div>
          </> : <p className='w-full h-[40%] text-xl text-green-500 font-semibold flex justify-center items-center'>Emty Cart</p>}
      
     




    </>

  )
}

export default Card2
