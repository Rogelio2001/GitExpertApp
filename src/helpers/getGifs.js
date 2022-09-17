
export const getGifs = async(category) => {
 //obtenemos url con nuestra api key
 const url= `https://api.giphy.com/v1/gifs/search?api_key=dnHgjF8r7l8p8k80wFX9jfhfhVr4FI9A&q=${ category }&limit=10`
 //mandamos la respuesta con un await fetch de la url
 const resp = await fetch(url);
 const { data }= await resp.json();

 const gifts = data.map(img =>({
     id: img.id,
     title: img.title,
     url: img.images.downsized_medium.url

 }));
   return gifts;
}

