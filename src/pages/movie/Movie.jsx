import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import SvgIcon from '@mui/material/SvgIcon';
import Vibrant from 'node-vibrant';

import MovieService from '../../service/movie/MovieService'
import StarIcon from '@mui/icons-material/Star';

import "./Movie.css"


// function StarIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-6 h-6" color='#e8b315'>
//         <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
//       </svg>

//     </SvgIcon>
//   );
// }

const Movie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState({})
  const [isLight, setIsLight] = useState(true)

  const getMovie = async () => {
    const response = await MovieService.getMovie(id)
    console.log(response)
    setMovie(response)
  }



  useEffect(() => {
    getMovie()
    Vibrant.from('http://localhost:5173/besouro.jpg').getPalette((err, palette) => {
      if (err) {
        console.error('Erro ao extrair paleta de cores:', err);
        return;
      }

      function hexToRgbA(hex, opacity) {
        let c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
          c = hex.substring(1).split('');
          if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
          }
          c = '0x' + c.join('');
          return `rgba(${(c >> 16) & 255},${(c >> 8) & 255},${c & 255},${opacity})`;
        }
        throw new Error('Formato de cor inválido.');
      }

      const predominantColor = palette.Vibrant.getHex();
      const vibrantColor = hexToRgbA(palette.Vibrant.getHex(), 1);
      const mutedColor = hexToRgbA(palette.Muted.getHex(), 1);
      const darkVibrantColor = hexToRgbA(palette.DarkVibrant.getHex(), 1);

      console.log('Cor predominante:', predominantColor);
      console.log('Cor vibrante:', vibrantColor);
      console.log('Cor suave:', mutedColor);
      console.log('Cor escura vibrante:', darkVibrantColor);

      document.body.style.background = `linear-gradient(90deg, ${vibrantColor} 0%, ${vibrantColor} 20%, ${mutedColor} 100% `;

      function isColorLight(rgbColor, threshold = 128) {
        // Extrai os componentes RGB da cor
        const [red, green, blue] = rgbColor.match(/\d+/g);

        // Calcula o valor médio dos componentes RGB
        const averageColorValue = (parseInt(red) + parseInt(green) + parseInt(blue)) / 3;

        // Compara o valor médio com o limite
        return averageColorValue > threshold;
      }

      const isLight = isColorLight(mutedColor);

      if (isLight) {
        // Use cor de fonte preta
        document.body.style.color = 'black';
      } else {
        // Use cor de fonte branca
        document.body.style.color = 'white';
      }
    });
    return () => {
      document.body.style.background = '';
      document.body.style.color = '';
    };
  }, [])

  return (
    <>{movie &&
      <div className='container_movie'>
        <img src="/besouro.jpg" alt={movie.title} />
        <div className="title_div">
          <h2>{movie.title}</h2>
          <h3 className='movie_rate'><StarIcon className='star_icon' />{movie.vote_average}</h3>
          <h3 className='movie_rate'>{movie.tagline}</h3>
        </div>

      </div>
    }</>
  )
}

export default Movie