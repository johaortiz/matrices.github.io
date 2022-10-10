import { Routes, Route } from "react-router-dom";
import Ejercicio1 from "./components/Ejercicio1";
import Ejercicio2 from "./components/Ejercicio2";
import Ejercicio3 from "./components/Ejercicio3";
import Ejercicio4 from "./components/Ejercicio4";
import Ejercicio5 from "./components/Ejercicio5";
import Ejercicio6 from "./components/Ejercicio6";
import Ejercicio7 from "./components/Ejercicio7";
import Ejercicio8 from "./components/Ejercicio8";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route exact path='/ej1' element={<Ejercicio1 />} />
      <Route exact path='/ej2' element={<Ejercicio2 />} />
      <Route exact path='/ej3' element={<Ejercicio3 />} />
      <Route exact path='/ej4' element={<Ejercicio4 />} />
      <Route exact path='/ej5' element={<Ejercicio5 />} />
      <Route exact path='/ej6' element={<Ejercicio6 />} />
      <Route exact path='/ej7' element={<Ejercicio7 />} />
      <Route exact path='/ej8' element={<Ejercicio8 />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default App;
