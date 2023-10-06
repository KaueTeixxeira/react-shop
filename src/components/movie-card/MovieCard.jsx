
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
    <Card sx={{ maxWidth: 200, minHeight: 355, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 2, alignContent: 'space-between', bgcolor: '#000'}} className="card_movie">
      <CardMedia
        component="img"
        alt={movie.title}
        image="/minions.jpg"
        className='img_movie' />
      <CardContent>
        <Typography variant="h6" component="div" className='movie_tittle' sx={{ fontSize: 20, minWidth: 28, fontFamily: "'Sofia Sans Condensed', sans-serif", color: '#fff' }}>
          {truncateTitle(movie.title, 38)}
        </Typography>
        <h3 className='movie_rate'><StarIcon className='star_icon'/>{movie.vote_average}</h3>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center'
      }}>
        <Link to={'/movie/' + movie.id}>
          <Button size="medium" className="animated-button" sx={{ color: "white" }}>More details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MovieCard