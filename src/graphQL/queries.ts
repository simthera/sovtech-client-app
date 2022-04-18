import { gql } from "@apollo/client";

export const PEOPLE_QUERY = gql`
  query people($page: Int!) {
    people(page: $page) {
      numberOfPages
      hasNextPage
      hasPreviousPage
      people {
        name
      }
    }
  }
`;

export const FIND_PERSON_QUERY = gql`
  query personByName($name: String!) {
    personByName(name: $name) {
      name
      height
      mass
      gender
      homeworld {
        name
        rotationPeriod
        terrain
        climate
        population
      }
    }
  }
`;
