import React from "react";

import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie, ratingChanged, rating }) => {
  return (
    <div>
      {/*<div>
        <div>
          <div>
            <img src={movie.posterURL} alt={movie.title} />
            <div>
              <span>{movie.description}</span>
              <h1>{movie.title}</h1>
              <StarRatingComponent
                name="rate1"
                starCount={5}
                value={movie.rating}
                onChange={ratingChanged}
              />
              <button>Watch It Now</button>
            </div>
          </div>
        </div>
      </div> */}
      <Card style={{ width: "18rem" }}>
        <div className="images">
          <Card.Img variant="top" src={movie.posterURL} />
        </div>
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>{movie.description}</Card.Text>
        
          <br />
          <Button variant="primary">Watch It Now!</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;