/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMentoring = /* GraphQL */ `
  mutation CreateMentoring(
    $input: CreateMentoringInput!
    $condition: ModelMentoringConditionInput
  ) {
    createMentoring(input: $input, condition: $condition) {
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
export const updateMentoring = /* GraphQL */ `
  mutation UpdateMentoring(
    $input: UpdateMentoringInput!
    $condition: ModelMentoringConditionInput
  ) {
    updateMentoring(input: $input, condition: $condition) {
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
export const deleteMentoring = /* GraphQL */ `
  mutation DeleteMentoring(
    $input: DeleteMentoringInput!
    $condition: ModelMentoringConditionInput
  ) {
    deleteMentoring(input: $input, condition: $condition) {
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
