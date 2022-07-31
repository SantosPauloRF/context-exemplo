import { useCountContext } from "./Context"

export default function MainPage() {

    const {
        inicialCount,
        count, setCount,
        increaseCount,
        decreaseCount
    } = useCountContext();
    
    return (
        <>
        <h2>{count}</h2>
        <button onClick={increaseCount} >Increase</button>
        <button onClick={decreaseCount} >Decrease</button>
        <button onClick={() => (setCount(inicialCount))} >Reset</button>
        </>
    )
}
