import { createRoot } from "react-dom/client";
import { restaurants } from "./materials/mock";

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <>
    {restaurants.map((item) => {
      return (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <h3>Меню</h3>
          <ul>
            {item.menu.map((info) => (
              <li key={info.id}>{info.name}</li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {item.reviews.map((rev) => (
              <li key={rev.id}>{`${rev.user}: ${rev.text}`}</li>
            ))}
          </ul>
        </div>
      );
    })}
  </>
);
