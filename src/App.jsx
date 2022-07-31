import MainPage from "./MainPage";
import { useCountContext } from "./Context"

function App() {

  const {title} = useCountContext();
  

  return (
    <div>
      {title}
      <MainPage />
    </div>
  );
}

export default App;
