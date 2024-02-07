import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  console.log(pokemon);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${pageNumber}`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log("Error fetching Pokemon:", error);
      }
    }

    loadPokemon();
  }, [pageNumber]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          setPageNumber(pageNumber - 1);
        }}
        disabled={pageNumber === 0}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setPageNumber(pageNumber + 1);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
