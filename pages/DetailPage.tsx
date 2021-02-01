import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";

import { getGame, loadGame } from "../redux";
import { Rating } from "../components";

const DetailPageComponent = ({ loadGame }) => {
  const { id } = useParams();
  const game = useSelector(getGame);

  useEffect(() => {
    loadGame(id);
  }, [id]);

  if (!game) {
    return <div />;
  }

  return (
    <div className="p-10">
      <div className="mb-10">
        <Link to="/">&lt; Back</Link>
      </div>

      <div className="text-center mb-10">
        <h2>{game.name}</h2>

        <div className="game-image-container">
          <img src={game.background_image} />
        </div>
      </div>

      <div className="nes-container with-title mb-10">
        <p className="title">Description</p>
        <div>{game.description_raw}</div>
      </div>

      <div className="nes-container with-title">
        <p className="title">Ratings</p>
        <Rating totalRatings={game.ratings_count} rating={game.rating} />
      </div>
    </div>
  );
};

export const DetailPage = connect(
  null,
  { loadGame }
)(DetailPageComponent);
