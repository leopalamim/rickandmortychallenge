export interface CharactersResponse {
  characters: Results
}

export interface Results {
  results: Character[]
}

export interface Character {
  name: string
}

export interface CharacterResponse {
  character: Person
}

export interface Person {
  name: string
  status: string
  image: string
  episode: Episode[]
}

export interface Episode {
  name: string
}