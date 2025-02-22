import type { Favoritepokemon } from "src/interfaces/favoritepokemon"
import { Show , createSignal, type Component } from "solid-js"
import { siteConfig } from "@utils/config"

interface Props{
    pokemon: Favoritepokemon
}

export const FavoritePokemonCard:Component<Props> = ({pokemon}) => {
  const [isvisible, setisvisible] = createSignal(true);
  const ImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;
  const deleteFavorite = ()=>{
    const favorites = JSON.parse(localStorage.getItem("favorites") ?? "[]") as Favoritepokemon[];
    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);
    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setisvisible(false);
  }
  return (
    <Show when={isvisible()}>
      <div class="flex flex-col justify-center items-center">
        <a class="pt-3 pb-1" href={`${siteConfig.basepath}/pokemons/${pokemon.name}`}>
        <img src={ImgSrc} alt={pokemon.name} width="96" height="96" style={`view-transition-name:${pokemon.name}-image`}/>
          <p class="capitalize text-center text-lg">{pokemon.name}</p>
        </a>
        <button onClick={deleteFavorite} class=" text-center gap-2 text-red-400 flex items-center justify-center p-3">
          <svg fill="currentColor" width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg> Borrar
        </button>
      </div>
    </Show>
  )
}
