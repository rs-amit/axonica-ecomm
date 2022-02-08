import { useContext, useReducer, createContext, useEffect } from "react";

const StateContext = createContext()

export default function StateProvider({ children }) {
    const [state, dispatch] = useReducer(ReducerFunc, { cart:[], isFatching:false, error:false})

    return (
        <StateContext.Provider value={{ cart: state?.cart,isFatching:state?.isFatching, dispatch }}>
            {children}
        </StateContext.Provider>
    );
}
export const StateHandler = () => useContext(StateContext)





const ReducerFunc = (state, action) => {
    switch (action.type) {
        case "GETDATA-SUCCESSFULL":
            return {
                state, cart: action.PayLoad,
                state, isFatching:false,
            }
    }

}


    // useEffect(() => {
    //     console.log(state?.user)
    //     localStorage.setItem("salesperson", JSON.stringify(state?.user))
    // }, [state?.user])