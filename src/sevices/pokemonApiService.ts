import axios from 'axios';

import { formatPokemonDetails } from '../utils/formatPokemonDetails';
import { IPokemon, IPokemonsDetailsResponseData } from '../types/IPokemon';

interface IPokemonsResponseData {
  results: {
    name: string;
    url: string;
  }[];
  next: string;
}

interface IPokemonsFormattedResponseData {
  pokemonDetails: IPokemon[];
  next: string;
}

export const getPokemons = async (nextUrl?: string) => {
  const url = nextUrl || 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0';
  
  const response = await axios.get<IPokemonsResponseData>(url);
  
  const pokemons = response.data.results;
  const next = response.data.next;

  return { pokemons, next };
}

export const getPokemonDetails = async (url: string) => {
  const response = await axios.get<IPokemonsDetailsResponseData>(url);

  return response.data;
}

export const getFormattedPokemons = async(nextUrl?: string): Promise<IPokemonsFormattedResponseData> => {
  const { pokemons, next } = await getPokemons(nextUrl);

  const pokemonDetails = await Promise.all(
    pokemons.map(async ({ url }): Promise<IPokemon> => {
      const originalDetails = await getPokemonDetails(url);
      return formatPokemonDetails(originalDetails);
    })
  );

  return { pokemonDetails, next };
}
