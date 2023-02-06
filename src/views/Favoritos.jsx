import { useContext } from "react";
import Context from "../my_context.js";
import Heart from '../components/Heart.jsx';

const Favoritos = () => {
  const {fotos, setFotos} = useContext(Context);

  const quitarDeFavoritos = (id) => {
    const index = fotos.findIndex((f) => f.id === id);
    fotos[index].liked = !fotos[index].liked
    setFotos([...fotos]);
    }
  
  return (
    <>
      <div>
        <h1 className="title text-center">Fotos favoritas</h1>
        <div className="p-5 galeria grid-columns-4 text-white">
          {fotos.filter((f)=>f.liked).map((f)=>(
            <div className='card border-0 hvr-grow' key={f.id}>
              <img className='card-img'
              src={f.src}
              />
              <div className='card-img-overlay card-container-main' onClick={()=>quitarDeFavoritos(f.id)}>
                <div className="heart">
                  <Heart filled={f.liked} />
                </div>
                <div className="card-container">
                  <h5 className="card-title">{f.photographer}</h5>
                  <p className="card-text">{f.alt}</p>
                </div>
              </div>

            </div>
          ))}
        
        </div>
      </div>
    </>
  );
}

export default Favoritos