const initialState = {
     
    cart:{
        content:[]
    },


}


const mainReducer = ( state = initialState, action) => { 

    switch (action.type){
        case "ADD_TO_CART":

        return{
            ...state,
            cart: {
                ...state.cart,

                content: state.cart.content.concat(action.payload),

            },
        }

        case "REMOVE_FROM_CART":
            return{
                ...state,
                cart: {
                    ...state.cart,
                    content: state.cart.content.filter((book, i) => {
                        if ( i === action.payload){
                            return false
                        }else{
                            return true
                        }
                    }),
                }
            }
            default: 
              
              return state  
    }
}

export default mainReducer