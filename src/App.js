import "./styles/App.scss";
import { MenuProvider } from "./components/common/MenuContext";
import Home from "./pages/Home";

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <Home />
      </div>
    </MenuProvider>
  );
}

export default App;
