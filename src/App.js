import SobreMim from "./paginas/SobreMim";
import Inicio from "./paginas/Inicio"
import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="sobremim" element={<SobreMim/>} />
        <Route path="*" element={<div><p>Pagina não encontrada</p></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
