import { createContext, useState, useEffect } from "react";
const Context = createContext()
const ContextProvider = ({children}) =>{
    const [People,SetPeople] = useState([]);
    const data = async() =>{
        try {
        const data = await fetch('/data.json')
        const response = await data.json();
        SetPeople(response)
        } catch (error) {
            console.log(error)
            
        }
    }
    const Clear = () =>{
        var empty = []
        SetPeople(empty)
    }

    useEffect(()=>{
        data();
    },[])

return(
<Context.Provider value={{People, Clear, data}}>
{children}
</Context.Provider>
)
}
export{Context, ContextProvider}