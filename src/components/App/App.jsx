import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { Layout } from "../Layout/Layout";
import { Restaurant } from "../Restaurant/Restaurant";

export const App = () => {
  const [item, setItem] = useState(restaurants[0].id);
  const handleClick = (index) => {
    restaurants.find(({ id }) => {
      if (id === index) {
        setItem(index);
      }
    });
  };
  return (
    <>
      <Layout>
        {restaurants.map(({ id, name, menu, reviews }) => {
          return (
            <div>
              <button onClick={() => handleClick(id)}>
                <h2 key={id}>{name}</h2>
              </button>
              {item === id ? (
                <Restaurant menu={menu} reviews={reviews} />
              ) : null}
            </div>
          );
        })}
      </Layout>
    </>
  );
};
