import {useContext, createContext} from 'react'

const myContext = createContext();  // Inicializing context

const useCustomContextHook = () => {  // Creating a custom hook to use context. Will return the actual useContext hook with the created context inside
    return useContext(myContext)
};

const MyContextProvider = ({children}) => {  // provider component. Dont forget to recive {children}

    
        
    return (
        <myContext.Provider value={{ // will return the const that created de context (myContext) . Provider. Ill wrap {children} and needs to pass as value={{the reused stuff}}
            
        }}>
            {children}
        </myContext.Provider>
    )
}

export {useCustomContextHook, MyContextProvider} // export the provider to wrap all components and the custom hook to transfer the stuff