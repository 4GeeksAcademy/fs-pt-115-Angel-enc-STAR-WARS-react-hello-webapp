import React, { useEffect, useState } from "react";
import { fetchList } from "../services/swapi.js";
import Card from "../components/Card.jsx";

const titles = {
  people: "Personas",
  planets: "Planetas",
  vehicles: "Vehículos",
};

export default function ListPage({ type }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchList(type, 10)
      .then(setItems)
      .catch((e) => setErr(e.message))
      .finally(() => setLoading(false));
  }, [type]);

  if (loading) return <p>Cargando…</p>;
  if (err) return <p className="text-danger">{err}</p>;

  return (
    <>
      <h2 className="mb-3">{titles[type]} (máx. 10)</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {items.map((it) => <Card key={it.uid} type={type} item={it} />)}
      </div>
    </>
  );
}
