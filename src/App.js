import "./styles.css";
import Context from "./my_context.js";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./views/Home.jsx";
import Favoritos from "./views/Favoritos.jsx";

export default function App() {
  const [fotos, setFotos] = useState([]);
  const sharedState = {fotos, setFotos};
  const endpoint = "/fotos.json";

  //Consultar api
const getDataPics = async () => {
  const response = await fetch(endpoint);
  const data = await response.json();
  let dataFiltrada = data.photos.map((e)=> ({
    id: e.id,
    src: e.src.tiny,
    alt: e.alt,
    liked: e.liked,
    photographer: e.photographer
  }))
  setFotos(dataFiltrada);
  console.log(dataFiltrada)
}

//Llamar a la función
useEffect(()=>{
  getDataPics();
}, []);


  return (
    <div className="App">
      <Context.Provider value={sharedState}>
        
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>

      </Context.Provider>
    </div>
  );
}
