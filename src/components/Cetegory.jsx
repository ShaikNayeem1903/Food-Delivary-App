import React, { useContext } from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { dataContext } from '../context/Context';

function Cetegory({filter}) {
   

    const cetegory = [
        {
            id:1,
            name:"All",
            icon:<TiThSmallOutline className='w-[60px] h-[60px] text-green-600' />
        },
        {
            id:2,
            name:"Breakfast",
            icon:<MdOutlineFreeBreakfast className='w-[60px] h-[60px] text-green-600' />
        },
        {
            id:3,
            name:"Soups",
            icon:<TbSoup  className='w-[60px] h-[60px] text-green-600'/>

        },
        {
            id:4,
            name:"pasta",
            icon:<CiBowlNoodles className='w-[60px] h-[60px] text-green-600'/>
        },
        {
            id:5,
            name:"Main-Course",
            icon:<MdOutlineFoodBank className='w-[35px] h-[35px] text-green-600 shrink-0'/>
        },
        {
            id:6,
            name:"Pizza",
            icon:<GiFullPizza className='w-[60px] h-[60px] text-green-600'/>
        },
        {
            id:7,
            name:"Burger",
            icon:<GiHamburger className='w-[60px] h-[60px] text-green-600'/>
        }
        
    ]

    let {input}=useContext(dataContext)

  return (


    <div className='my-12 w-[100%] flex justify-center items-center flex-wrap gap-5'>
    {
       ! input ?
      cetegory.map(
          (cetegory_items)=>(
             
                  <div  key={cetegory_items.id} className='w-[120px] h-[120px] bg-white rounded-md shadow-lg flex flex-col justify-center items-center gap-5 p-5 cursor-pointer text-gray-700 font-semibold hover:bg-green-200 duration-200 transition-all ' 
                  onClick={()=> filter(cetegory_items.name)}>
                  {cetegory_items.icon}
                  {cetegory_items.name}
                  </div>
             
          )
      ):null
    }
  </div>
    
   
  )
}

export default Cetegory
