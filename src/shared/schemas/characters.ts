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
