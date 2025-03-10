import "./style.css";
import { Botoes } from "../button";

export function Card({ image, tags, title, description, price }) {
  return (
    <div id= "divMaior">
      <div id="card">
        <img src={image} alt="foto do café" id="cafe" />
        <p id="tp">{tags}</p>
        <p id="tp2">{title}</p>
        <p id="desc">{description}</p>
        <Botoes val={price} />
      </div>
    </div>
  );
}
