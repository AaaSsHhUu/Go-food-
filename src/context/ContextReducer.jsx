import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
const CartDispatchContext = createContext();

// Reducer for add to cart
const reducer = (state,action) => {
    switch(action.type){
        case "ADD" :
            return [...state,{
                id : action.id,
                name : action.name,
                qty : action.qty,
                size : action.size,
                price : action.price,
                img : action.img
            }]
        case "REMOVE" :
            let newState = [...state];
            newState.splice(action.index,1);
            return newState;
        case "DROP":
            return [];
        default :
            console.log("Error in reducer");
    }
}

export const CartProvider = ({children}) => {
    const [state, dispatch ] = useReducer(reducer,[])
    return (
        <CartDispatchContext.Provider value={dispatch} >
            <CartContext.Provider value={state}>
                {children}
            </CartContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);
export const useDispatchCart = () => useContext(CartDispatchContext);