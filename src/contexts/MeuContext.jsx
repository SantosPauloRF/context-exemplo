import { createContext, useContext, useState } from "react";

const meuContext = createContext();

const useContextHook = () =>{
    return useContext(meuContext)
}

function MeuContextProvedor({children}) {

    const titulo = "Olá"
    const [count, setCount] = useState(0)

    const incrementarNumero = () => {
        setCount (count + 1)
    }

    const decrementarNumero = () => {
        setCount (count - 1)
    }

    const resetarNumero = () => {
        setCount (0)
    }

    return (
        <meuContext.Provider value={{
            titulo,
            count, 
            incrementarNumero,
            decrementarNumero,
            resetarNumero
        }}>
            {children}
        </meuContext.Provider>
    )

}

export {MeuContextProvedor, useContextHook}