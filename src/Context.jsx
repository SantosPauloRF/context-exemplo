import {useContext, createContext, useState} from 'react'

const myContext = createContext();

const useCountContext = () => {
    return useContext(myContext)
};

const MyContextProvider = ({children}) => {

    const inicialCount = 0
    const title = <h1>Hi i am a title</h1>

    const [count, setCount] = useState(0)
    
    function increaseCount () {
        setCount(count + 1)
    }

    function decreaseCount () {
        setCount(count - 1)
    }
        
    return (
        <myContext.Provider value={{
            inicialCount,
            title,
            count, setCount,
            increaseCount,
            decreaseCount
        }}>
            {children}
        </myContext.Provider>
    )
}

export {useCountContext, MyContextProvider} 