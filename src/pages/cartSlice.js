import { createSlice } from "@reduxjs/toolkit";



const cartSlice=createSlice({
    name:"cartslice",
    initialState:[],
    reducers:{
        add:(state,action)=>{
            
            let exitItem = state.find((item)=>item.id===action.payload.id)
            if(exitItem){
                return state.map((item)=>item.id===action.payload.id ? {...item,qnt:item.qnt+1}:item)
            }else{
                state.push(action.payload)
            }
            
        },
        remove:(state,action)=>{
          return  state.filter((item)=>item.id!==action.payload)
        },

        incrementQnt:(state,action)=>{
            return state.map((item)=>item.id===action.payload ? {...item,qnt:item.qnt+1}:item)
        },
        decrementQnt:(state,action)=>{
            return state.map((item)=>item.id===action.payload ? {...item,qnt:item.qnt-1}:item)
        }
    }
})

export default cartSlice.reducer

export const {add,remove,incrementQnt,decrementQnt} = cartSlice.actions