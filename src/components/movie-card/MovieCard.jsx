
import {useEffect} from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const MovieCard = ({movie}) => {

  // let urlImage = import.meta.env.VITE_IMG
  useEffect (() => {
    console.log(movie.title)
  }, []) 

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300vh"
        image="/matrixx.jpg"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{display: "flex", justifyContent: "center"}}>
          {movie.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default MovieCard