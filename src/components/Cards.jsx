import React from 'react'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector} from 'react-redux';
import { add } from '../pages/cartSlice';
import { toast } from 'react-toastify';



function Cards({name,price,image,type,id}) {




  const dispatch = useDispatch()
  return (
<>
      
        <div  className='w-[250px] h-[350px] flex flex-col items-start gap-4 p-3  rounded-lg bg-white shadow-lg hover:border-2 border-green-500'>
          <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image}  alt="" className='w-full h-full object-cover'/>
          </div>

          <div className='text-2xl font-semibold'>{name}</div>

          <div className=' w-full flex justify-between items-center text-lg font-semibold text-green-500'>
            <div className=''>{price}</div>
            <div className=' flex justify-center items-center gap-2'>{type==="veg"? <LuLeafyGreen/>:<GiChickenOven />}
              <span>{type}</span>
            </div>

          </div>

          <div className=' w-full p-2 hover:bg-green-500 transition-all duration-300 rounded-lg text-xl font-semibold bg-green-200 text-white'>
            <button className='w-full' onClick={()=>{
            dispatch(add({id:id, name:name , price:price, image:image, type:type, qnt:1}));toast.success(`${name} added`)
            }}>Add to dish</button>
          </div>
        </div>

</>
  )
}

export default Cards
