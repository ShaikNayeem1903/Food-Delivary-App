import React, { createContext, useState } from 'react'
import { food_data } from '../pages/Food_data';
export const dataContext=createContext()
function UserContext({children}) {

    let [input,setInput]=useState("")
    let [cate,setCate]=useState(food_data)
    let [showcart,setShowCart]=useState(false)
let data={
                input,
                setInput,
                cate,
                setCate,
                showcart,
                setShowCart
            }
  return (
    <div>
     
      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
