import {
  BrowserRouter ,
  Routes,
  Route,
  Link
} from "react-router-dom";
import PokemonIndex from "./components/PokemonIndex"
import PokemonPage from "./components/PokemonPage";
function App() {  
  return (<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<PokemonIndex/>} />
      <Route path="/pokemon/:id" element={<PokemonPage/>} />
    </Routes>
  </BrowserRouter>)
}

export default App;
