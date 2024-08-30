import { gql } from "@apollo/client";

export const GET_ALL_CHARACTERS = gql`
  query AllPeople($first: Int, $last: Int) {
    allPeople(first: $first, last: $last) {
      people {
        name
        gender
        height
        homeworld {
          name
        }
        id
      }
    }
  }
`;

export const GET_CHARACTER_BY_ID = gql`
  query People($personId: ID) {
    person(id: $personId) {
      name
      birthYear
      species {
        name
      }
      homeworld {
        name
        population
        climates
      }
      filmConnection {
        films {
          title
        }
      }
    }
  }
`;
