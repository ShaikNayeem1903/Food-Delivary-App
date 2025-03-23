import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import Cetegory from '../components/Cetegory'
import Cards from '../components/Cards'
import { food_data } from './Food_data'
import { dataContext } from '../context/Context'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'

function Home() {
let {cate,setCate,showcart,setShowCart}=useContext(dataContext)
  function filter(cetegory){
    if(cetegory === "All"){
        setCate(food_data)
    }
    else{
     let newList= food_data.filter((item)=> item.food_category===cetegory)
     setCate(newList)
    }
  }
const items = useSelector(state=>state.cart);






  return (
    <div className='w-full min-h-screen bg-slate-200'>
      
      <Navbar/>
      <Cetegory filter={filter} />
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center'>
        {

          
          cate.map(
            (items)=>(
              <Cards key={items.id} name={items.food_name} image={items.food_image} type={items.food_type} price={items.price} id={items.id}  />
            )
          )
        }
          <div className={`w-full h-full md:w-1/2 md:h-full fixed top-0 right-0 p-6 shadow-xl overflow-y-auto rounded-ms transition-all duration-1000 bg-stone-100 ${showcart ? "translate-x-0":"translate-x-full"}`}>
<header className='w-full flex justify-between items-center text-green-400 font-semibold '>
  <span className='cursor-pointer' >Order Items</span>
  <span className='cursor-pointer text-2xl hover:text-gray-700' onClick={()=>setShowCart(false)}><RxCross2 /></span>
</header>
<Card2/>
</div>



      </div>
      
    </div>
  )
}

export default Home
