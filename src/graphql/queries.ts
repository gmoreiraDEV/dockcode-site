/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMentoring = /* GraphQL */ `
  query GetMentoring($id: ID!) {
    getMentoring(id: $id) {
      id
      name
      email
      phone
      company
      site
      employees
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listMentorings = /* GraphQL */ `
  query ListMentorings(
    $filter: ModelMentoringFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentorings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        phone
        company
        site
        employees
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
