import { createSignal , For } from "solid-js";
import type { Favoritepokemon} from "../../interfaces/favoritepokemon"
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStorageFavoritePokemons = ():[Favoritepokemon]=>{
    const favoritepokemons = JSON.parse(localStorage.getItem("favorites")?? '[]');
    return favoritepokemons;
}

export const FavoritePokemons = () => {
    const [pokemons, setpokemons] = createSignal(getLocalStorageFavoritePokemons());
  return (
    <div class=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mt-4 mb-5">
        <For each={pokemons()}>{ (pokemon) =><FavoritePokemonCard pokemon={pokemon}/>}</For>
    </div>
  )
}