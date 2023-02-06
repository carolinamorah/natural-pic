import "../assets/css/galeria.css"
import Context from "../my_context";
import { useContext } from "react";
import Heart from "./Heart";

const Galeria = () => {
  const {fotos, setFotos} = useContext(Context);

  const addToFavoritos = (id) => {
    const index = fotos.findIndex((f) => f.id === id);
    fotos[index].liked = !fotos[index].liked
    setFotos([...fotos]);
    }

  return (
    <div className="galeria grid-columns-5 p-5 text-light">
        {fotos.map((f)=>(
        <div className="card border-0 hvr-grow" key={f.id} onClick={()=>addToFavoritos(f.id)}>
            <img className="card-img"
            src={f.src} 
            alt={f.alt} 
            />
            <div className="card-img-overlay card-container-main">
              <div className="heart">
              <Heart filled={f.liked}/>
              </div>

              <div className="card-container">
                <h5 className="card-title">{f.photographer}</h5>
                <p className="card-text">{f.alt}</p>
              </div>
            </div>
        </div>
        ))}
    </div>
  );
}

export default Galeria