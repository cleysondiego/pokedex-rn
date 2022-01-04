export type IPokemonType = {
  name: 'normal' | 'fire' | 'water' | 'electric' | 'grass' | 'ice' | 'fighting' | 'poison' | 'ground' | 'flying' | 'psychic' | 'bug' | 'rock' | 'ghost' | 'dragon' | 'dark' | 'steel' | 'fairy';
}

export type IPokemon = {
  id: string;
  name: string;
  order: string;
  image: string;
  types: IPokemonType[];
  skills: {
    name: string;
  }[];
};

export type IPokemonsDetailsResponseData = {
  id: string;
  name: string;
  order: string;
  sprites: any;
  types: {
    type: IPokemonType;
  }[];
  abilities: {
    ability: {
      name: string;
    };
  }[];
}
