
import { useState } from "react";
import { AddCategory,GiftGrid } from "./Components";


export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    //recibimos el string del new Category y lo
    const onAddCategory=(newCategory)=>{

        //evaluamos si en el arreglo de categories esta 
        //la nueva categoria que agregamos si es asi se sale
        if(categories.includes(newCategory) )return;
        //añadimos un nuevo objeto a la coleccion junto con lo que ya se teia
        setCategories([newCategory,...categories]);
    }

   

  return (
    <>
    {/*titulo */}
    <h1>GitExpertAPP</h1>

    {/*input */}
    <AddCategory
    //hacemos una propiedad  que emita la nueva categoria 
    //al hijo
    onNewCategory={onAddCategory}
    />

    {/*listado de GIF */}
        
        {/* Con en .map logramos adicionar cada uno de los elementos
        var numbers = [1, 5, 10, 15];
        var doubles = numbers.map(function(x) {
         return x * 2;
         });
        doubles is now [2, 10, 20, 30]
        numbers is still [1, 5, 10, 15] */}
        {/*se tiene que proporcionar una key cuando haces una lista dinamica
                de map */} 
        {/*lo que queremos mostrar es el category */}
       { 
        categories.map(category=>(
               <GiftGrid key={category} 
               category={category}/>
               )
               )
        }
       
        

        {/* Gif Item*/}
    </>
  )
}
