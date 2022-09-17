import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
//useEffect se usa para disparar
//efectos secundarios
export const usefetchGifs = (category) => {
    //usamos el useEffect para las peticiones no se disparen
    //mas que la vez que se usan
    //en este caso queremos renderizar la función de los gifts
    //la integramos en el useEffect
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)

    const getImages=async()=>{
        const newimages =await getGifs(category)
        setImages(newimages)
        setisLoading(false)
    }
    useEffect( () => {
        getImages();
    },[])

    return {
        images,
        isLoading
    }

    
}
