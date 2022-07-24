import React from "react";
import PaginaPrincipal from "./pages/PaginaPrincipal"
import {useContextHook} from "./contexts/MeuContext"

function App() {

  const {titulo} = useContextHook();
  
  
  return (
    <div>
     <h1>{titulo}</h1>
     <PaginaPrincipal />
    </div>
  );
}

export default App;