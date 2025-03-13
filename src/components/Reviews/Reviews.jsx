import React from "react";

export const Reviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((reviews) => (
          <li key={reviews.id}>{`${reviews.user}: ${reviews.text}`}</li>
        ))}
      </ul>
    </>
  );
};
