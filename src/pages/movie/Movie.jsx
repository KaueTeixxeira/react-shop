import { useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Vibrant from 'node-vibrant';

import MovieService from '../../service/movie/MovieService'

const Movie = () => {

  const {id} = useParams()
  const [movie, setMovie] = useState({})


  const getMovie = async () => {
    const response = await MovieService.getMovie(id)
    setMovie(response)
  }



  useEffect(() => {
    // getMovie()
    Vibrant.from('http://localhost:5173/matrixx.jpg').getPalette((err, palette) => {
      if (err) {
        console.error('Erro ao extrair paleta de cores:', err);
        return;
      }

      // Acesse as cores extraídas da paleta
      const predominantColor = palette.Vibrant.getHex();
      const vibrantColor = palette.Vibrant.getHex();
      const mutedColor = palette.Muted.getHex();
      const darkVibrantColor = palette.DarkVibrant.getHex();

      // Use as cores em seu componente ou aplicativo
      console.log('Cor predominante:', predominantColor);
      console.log('Cor vibrante:', vibrantColor);
      console.log('Cor suave:', mutedColor);
      console.log('Cor escura vibrante:', darkVibrantColor);
    });
  },[])

  return (
    <div>{movie && <>{movie.title}</>}</div>
  )
}

export default Movie