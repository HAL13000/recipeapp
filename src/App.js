import "./styles/App.scss";
import { MenuProvider } from "./components/common/MenuContext";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";
import Favorites from "./pages/Favorites";
import MyRecipe from "./pages/MyRecipe";
import Recipe from "./pages/Recipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <MenuProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/add-recipe"} element={<AddRecipe />} />
            <Route path={"/favorites"} element={<Favorites />} />
            <Route path={"/my-recipe"} element={<MyRecipe />} />
            <Route path={"/recipe"} element={<Recipe />} />
          </Routes>
        </BrowserRouter>
      </div>
    </MenuProvider>
  );
}

export default App;
