export const CharactersQuery = `
  query {
    characters {
      results {
        id
        name
        status
        image
      }
    }
  }
`

export const CharacterQuery = `
  query ($id: ID!) {
    character (id: $id) {
      image
      status
      name
      episode {
        name
      }
    }
  }
`