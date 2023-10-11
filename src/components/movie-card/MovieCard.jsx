import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Skeleton } from '@mui/material';

import StarIcon from '@mui/icons-material/Star';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  const [imagesUrl, setImagesUrl] = useState([
    "/elementos.jpg",
    "/matrix2.jpg",
    "/besouro.jpg",
    "/bumble.jpg",
    "/kill.jpg",
    "/liberdade.jpg",
    "/minions.jpg",
  ]);

  const [imagem, setImagem] = useState("/elementos.jpg");

  const truncateTitle = (title, maxLength) => {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  };

  useEffect(() => {
    setImagem(imagesUrl[Math.floor(Math.random() * imagesUrl.length)]);
  }, []);

  return movie ? (
    <Link to={`/movie/${movie.id}`} className="link">
      <Card
        sx={{
          maxWidth: 200,
          minHeight: 355,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginBottom: 2,
          alignContent: 'space-between',
          borderRadius: '10px',
        }}
        className="card_movie"
      >
        <CardMedia
          component="img"
          alt={imagem}
          image={imagem}
          className="img_movie"
        />
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            className="movie_tittle"
            sx={{
              fontSize: 20,
              minWidth: 28,
              fontFamily: "'Sofia Sans Condensed', sans-serif",
            }}
          >
            {truncateTitle(movie.title, 38)}
          </Typography>
          <h3 className="movie_rate_card">
            <StarIcon className="star_icon" />
            {movie.vote_average}
          </h3>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            size="medium"
            className="animated-button"
            sx={{ color: 'white', minWidth: 183, borderRadius: '10px' }}
          >
            More details
          </Button>
        </CardActions>
      </Card>
    </Link>
  ) : (
    <div
      style={{
        height: '360px',
        width: '200px',
      }}
    >
      <Skeleton width="100%" height="100%" variant="rounded" sx={{ background: 'linear-gradient(90deg, rgba(36,143,190,1) 0%, rgba(67,58,171,1) 49%, rgba(124,19,158,1) 100%)' }} />
    </div>
  );
};

export default MovieCard;
