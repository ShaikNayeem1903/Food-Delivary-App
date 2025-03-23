import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from '../context/Context';
import { food_data } from '../pages/Food_data';
import { useSelector } from 'react-redux';
function Navbar() {

  let {input,setInput,cate,setCate,showcart,setShowCart}=useContext(dataContext)

  useEffect(
    ()=>{
         const newList= food_data.filter((items)=>items.food_name.includes(input) || items.food_name.toLowerCase().includes(input))
          setCate(newList)
    },[input]

  )

 const  data= useSelector(state=>state.cart);
 
 
  return (
    <div  className='px-8 flex justify-between items-center  w-full h-28'>

      <div className='px-5 flex justify-center w-16 h-16 rounded-md shadow-xl items-center bg-white'>
      <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
      </div>

      <form className='flex px-5 items-center gap-5  w-[45%] md:w-[70%] h-[40px] bg-white rounded-md shadow-md' onSubmit={(e)=>e.preventDefault}>
      <IoMdSearch className=' text-green-500 w-[20px] h-[20px]'/>

      <input type="text" placeholder='Search Items...'value={input} className='w-[100%] h-[35px] outline-none text-sm ' onChange={(e)=>setInput(e.target.value)}/>
      </form>
        
      <div className='px-5 flex justify-center w-16 h-16 rounded-md shadow-xl items-center bg-white relative cursor-pointer ' onClick={()=>setShowCart(true)}>
      <RiShoppingBag4Line  className='w-[30px] h-[30px] text-green-500 '/>
      <span className='absolute top-2 right-3 font-bold text-[15px] text-green-500'>{data.length}</span>
      </div>
    </div>
   
  )
}

export default Navbar
