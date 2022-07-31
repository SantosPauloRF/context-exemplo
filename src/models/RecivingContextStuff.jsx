import { useCountContext } from "../Context" // Import custom context Hook

export default function MainPage() {

    const {inicialCount} = useCountContext(); // call the imported vars in a new var recivin the custom hook
    
    return (
        <>
        <h1>{inicialCount}</h1>
        </>
    )
}
