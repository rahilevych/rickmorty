import { gql } from '@apollo/client';

export const GETALLEPISODSS1 = gql`
  query getAllEpisodes {
    episodes(filter: { episode: "S01" }) {
      results {
        id
        name
        characters {
          image
          name
        }
      }
    }
  }
`;
export const GETALLEPISODSS2 = gql`
  query getAllEpisodes {
    episodes(filter: { episode: "S02" }) {
      results {
        id
        name
        characters {
          image
          name
        }
      }
    }
  }
`;
export const GETALLEPISODSS3 = gql`
  query getAllEpisodes {
    episodes(filter: { episode: "S03" }) {
      results {
        id
        name
        characters {
          image
          name
        }
      }
    }
  }
`;
export const GETALLEPISODSS4 = gql`
  query getAllEpisodes {
    episodes(filter: { episode: "S04" }) {
      results {
        id
        name
        characters {
          image
          name
        }
      }
    }
  }
`;
export const GETALLEPISODSS5 = gql`
  query getAllEpisodes {
    episodes(filter: { episode: "S05" }) {
      results {
        id
        name
        characters {
          image
          name
        }
      }
    }
  }
`;
