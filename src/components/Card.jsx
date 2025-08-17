import React from "react";
import { Link } from "react-router-dom";
import { getImageUrl, placeholder } from "../utilidades/images.js";
import { useFavs } from "../context/FavsContext.jsx";

export default function Card(props) {
  const type = props.type || props.category;
  const id = props.id || props.item?.uid;
  const name = props.name || props.item?.name;

  const { toggleFav } = useFavs();

  return (
    <div className="card h-100 shadow-sm">
      <img
        className="card-img-top"
        src={getImageUrl(type, id)}
        onError={(e) => (e.currentTarget.src = placeholder)}
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <div className="d-flex gap-2">
          <Link to={`/${type}/${id}`} className="btn btn-primary btn-sm">
            Detalles
          </Link>
          <button
            className="btn btn-outline-warning btn-sm"
            onClick={() => toggleFav({ type, id, name })}
          >
            ⭐ Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
