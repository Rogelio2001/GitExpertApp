import { GifItem } from "./GifItem";
import { usefetchGifs } from "../hooks/usefetchGifs";



//useEffect se usa para disparar
//efectos secundarios
export const GiftGrid = ({category}) => {
    
    const { images,isLoading }= usefetchGifs(category);
    
    return (

    <>

    <h3>{category}</h3>
    
    {
        isLoading && (<h2>cargando...</h2>)
    }
    <div className="card-grid">
        {images.map((image) =>(
         <GifItem 
         key={image.id}
         {...image}/>
         
        ))
        }
    </div>

    </>
  )
}
