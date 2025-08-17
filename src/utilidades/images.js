import starwarsLogo from "../assets/img/starwars.png";

export function getImageUrl(category, id) {
  const RAW_BASE =
    "https://raw.githubusercontent.com/tbone849/star-wars-guide/master/build/assets/img";

  const mapFolder = {
    people: "characters",
    planets: "planets",
    vehicles: "vehicles",
  };

  const folder = mapFolder[category] || category;
  return `${RAW_BASE}/${folder}/${id}.jpg`;
}

// si falla la carga, usamos el logo de Star Wars
export const placeholder = starwarsLogo;
