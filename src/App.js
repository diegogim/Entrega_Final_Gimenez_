import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Hola cliente"}/>
    </div>
  );
}

export default App;
