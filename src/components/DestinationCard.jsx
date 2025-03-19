import React from "react";
import "./DestinationCard.css"; // Import CSS

const DestinationCard = ({ destination }) => {
  return (
    <div className="destination-card">
      <img src={destination.image} alt={destination.name} className="destination-image" />
      <h2>{destination.name}</h2>
      <h4>{destination.location}</h4>
      <p>{destination.description}</p>
      <strong>{destination.price}</strong>
    </div>
  );
};

export default DestinationCard;
