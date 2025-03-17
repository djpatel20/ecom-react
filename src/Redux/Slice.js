import {createSlice} from "@reduxjs/toolkit"
const initialState = {

    products : [],

}


 const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers:{
        addCart:(state,action)=>{
         const isExists = state.products.some((item)=> item.id === action.payload.id)
                if(!isExists){
                    
                    state.products.push(action.payload); 
                }
            
        },
        deleteCart:(state,action)=>{
           state.products = state.products.filter((item)=> item.id !== action.payload)
        }
    }
})

export default cartSlice.reducer 
export  const { addCart,deleteCart } = cartSlice.actions;