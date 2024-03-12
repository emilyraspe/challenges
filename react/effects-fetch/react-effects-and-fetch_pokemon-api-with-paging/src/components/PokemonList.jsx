import { useEffect, useState } from "react";
import "./PokemonList.css";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffSet] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        const data = await response.json();
        setPokemon(data.results);
        setOffSet(offset);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  const handleNext = () => {
    setOffSet((prevState) => prevState + 20);
  };

  const handlePrev = () => {
    if (offset >= 20) {
      setOffSet((prevState) => prevState - 20);
    }
  };

  return (
    <main>
      <button type="button" className="button" onClick={handlePrev}>
        Previous Page
      </button>
      <button type="button" className="button" onClick={handleNext}>
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name} className="pokemon">
            {name}
          </li>
        ))}
      </ul>
    </main>
  );
}
