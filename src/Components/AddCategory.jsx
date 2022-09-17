import { useState } from 'react'

export const AddCategory = ({onNewCategory }) => {
   
    const [inputValue, setinputValue] = useState('')
    
   //para meter un valor se utiliza el set y dentro
   /*de las propiedades del input esta target.value
   el cual regresa lo que el usuario metio */
   
   //desestruturamos la propiedad del input para solo tener el 
   //target y saber que valores se ponen
   const onInputChange=({target})=>{
        //con el set ponemos el valor que recuperamos en el value
        setinputValue(target.value);
    }

    /*como en submit manda la info
    necesitamos recuperar lo que se pone en las categorias
    el setCategories es el encargado de poner las nuevas ctaegorias
    necesitamos recuperar lo que estaba y añadir lo que ponemos en la lista */

    const onSubmit=(event)=>{

        event.preventDefault();
        //verificamos que lo que ingrese tenga mas de un caracter
        //con el trim eliminamos los espacios en blanco
        if(inputValue.trim().length<=1) return;

        /*lo que hacemos es agregar lo que se ingrese en el teclado y que se 
            vaya anidando */
        onNewCategory((inputValue.trim()))
        //Limpiamos el input mandando una cadena vacia
        setinputValue('');

    }


    return (
        <form onSubmit={ onSubmit }>
        
        <input type="text"
                placeholder="Buscar Gifts"
                value={inputValue}
                //onChange o la palabra on
                //signifca que esta emitiendo algo
                onChange={onInputChange}
        />

        </form>

      
    )


}
