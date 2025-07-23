import React, { useState } from "react";
import PropTypes from "prop-types";
import { useCart } from "./CartContext";
import heart from "/assets/icons/heart.svg";
import eye from "/assets/icons/eye.svg";
import five from "/assets/icons/five-star.svg";
import four from "/assets/icons/four-star.svg";
import three from "/assets/icons/three.svg";
import trash from "/assets/icons/trash.svg";
import fourHalf from "/assets/icons/four-half-star.svg";
import colour1 from "/assets/icons/colour-1.svg";
import colour2 from "/assets/icons/colour-2.svg";
import colour3 from "/assets/icons/colour-3.svg";
import colour4 from "/assets/icons/colour-4.svg";

const ItemDisplay = ({
  label,
  price,
  starRating,
  votes,
  product,
  discount,
  percent,
  colourSet,
  showHeart,
  showTrash,
  addToCartButton,
  noShowRating,
}) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      label,
      price: parseFloat(price),
      product,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); // show "Added!" for 1.5 seconds
  };

  return (
    <div className="image-display w-100 min-w-270px">
      <div className="image-display__header h-250px">
        {percent === "new" ? (
          <div className="badge badge-green"><span>New</span></div>
        ) : percent ? (
          <div className="badge badge-reddish-brown"><span>-{percent}%</span></div>
        ) : null}

        <img src={product} alt={label} />
        <div className="menu-options">
          {showHeart && <img src={heart} alt="heart" />}
          {!showTrash && <img src={eye} alt="view" />}
          {showTrash && <img src={trash} alt="trash" />}
        </div>

        {addToCartButton && (
          <button className="add-to-cart" onClick={handleAddToCart}>
            <p>{added ? "Added" : "Add To Cart"}</p>
          </button>
        )}
      </div>

      <div className="image-display__footer">
        <p className="image-display__footer--label">{label}</p>

        {discount ? (
          <>
            <p>
              <span className="image-display__footer--price">${price}</span>
              <span className="image-display__footer--discount">
                ${discount}
              </span>
            </p>
            {!noShowRating && (
              <div className="image-display__footer--star-rating">
                {renderStars(starRating)}
                <span className="image-display__footer--votes">({votes})</span>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="div-flex">
              <span className="image-display__footer--price">${price}</span>
              {!noShowRating && (
                <div className="image-display__footer--star-rating">
                  {renderStars(starRating)}
                  <span className="image-display__footer--votes">({votes})</span>
                </div>
              )}
            </div>
            {renderColourSet(colourSet)}
          </>
        )}
      </div>
    </div>
  );
};

const renderStars = (rating) => {
  switch (rating) {
    case "three":
      return <img src={three} alt="3 stars" />;
    case "four":
      return <img src={four} alt="4 stars" />;
    case "four-and-half":
      return <img src={fourHalf} alt="4.5 stars" />;
    default:
      return <img src={five} alt="5 stars" />;
  }
};

const renderColourSet = (set) => {
  switch (set) {
    case "1":
      return <img src={colour1} alt="color 1" />;
    case "2":
      return <img src={colour2} alt="color 2" />;
    case "3":
      return <img src={colour3} alt="color 3" />;
    case "4":
      return <img src={colour4} alt="color 4" />;
    default:
      return null;
  }
};

ItemDisplay.propTypes = {
  discount: PropTypes.string,
  percent: PropTypes.string,
  price: PropTypes.string,
  votes: PropTypes.string,
  label: PropTypes.string,
  starRating: PropTypes.string,
  addToCartButton: PropTypes.bool,
  product: PropTypes.any,
  colourSet: PropTypes.string,
  showHeart: PropTypes.bool,
  showTrash: PropTypes.bool,
  noShowRating: PropTypes.bool,
};

export default ItemDisplay;
