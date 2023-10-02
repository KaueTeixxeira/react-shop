
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'
import { padding } from '@mui/system';

import './MovieCard.css';

const MovieCard = ({ movie }) => {

  // let urlImage = import.meta.env.VITE_IMG
  useEffect(() => {
    console.log(movie)
  }, [])

  const button = {
    color: "white",
    background: 'linear-gradient(90deg, rgba(36,143,190,1) 0%, rgba(67,58,171,1) 49%, rgba(124,19,158,1) 100%)',
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300vh"
        image="/matrixx.jpg"
      />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ display: "flex", justifyContent: "center" }}>
          {movie.title}
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px'
      }}>
        <Link to={'/movie/' + movie.id}>
          <Button size="medium"  className="animated-button">More details</Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default MovieCard