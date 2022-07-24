import React from "react"
import { useContextHook } from "../contexts/MeuContext"

export default function PaginaPrincipal() {

    const {count, incrementarNumero, resetarNumero, decrementarNumero} = useContextHook();

    return (
        <>
        <h1>{count}</h1>
        <button onClick={incrementarNumero} >Incrementar</button>
        <button onClick={decrementarNumero}>Decrementar</button>
        <button onClick={resetarNumero}>Resetar</button>
        </>

    )
}
