
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';

import StarIcon from '@mui/icons-material/Star';
import './MovieCard.css';

const MovieCard = ({ movie }) => {

  // let urlImage = import.meta.env.VITE_IMG
  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };


  return (
    <Link to={'/movie/' + movie.id} className="link">
    <Card sx={{ maxWidth: 200, minHeight: 355, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2, alignContent: 'space-between', borderRadius: '10px'}} className="card_movie">
      <CardMedia
        component="img"
        alt={movie.title}
        image="/elementos.jpg"
        className='img_movie' />
      <CardContent>
        <Typography variant="h6" component="div" className='movie_tittle' sx={{ fontSize: 20, minWidth: 28, fontFamily: "'Sofia Sans Condensed', sans-serif" }}>
          {truncateTitle(movie.title, 38)}
        </Typography>
        <h3 className='movie_rate_card'><StarIcon className='star_icon'/>{movie.vote_average}</h3>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
          <Button size="medium" className="animated-button" sx={{ color: "white", minWidth: 183,  borderRadius: '10px'}}>More details</Button>
      </CardActions>
    </Card>
        </Link>
  )
}

export default MovieCard