/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMentoringInput = {
  id?: string | null,
  name: string,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  site?: string | null,
  employees?: string | null,
  description?: string | null,
};

export type ModelMentoringConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  site?: ModelStringInput | null,
  employees?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMentoringConditionInput | null > | null,
  or?: Array< ModelMentoringConditionInput | null > | null,
  not?: ModelMentoringConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Mentoring = {
  __typename: "Mentoring",
  id: string,
  name: string,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  site?: string | null,
  employees?: string | null,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMentoringInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  company?: string | null,
  site?: string | null,
  employees?: string | null,
  description?: string | null,
};

export type DeleteMentoringInput = {
  id: string,
};

export type ModelMentoringFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  company?: ModelStringInput | null,
  site?: ModelStringInput | null,
  employees?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMentoringFilterInput | null > | null,
  or?: Array< ModelMentoringFilterInput | null > | null,
  not?: ModelMentoringFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelMentoringConnection = {
  __typename: "ModelMentoringConnection",
  items:  Array<Mentoring >,
  nextToken?: string | null,
};

export type CreateMentoringMutationVariables = {
  input: CreateMentoringInput,
  condition?: ModelMentoringConditionInput | null,
};

export type CreateMentoringMutation = {
  createMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMentoringMutationVariables = {
  input: UpdateMentoringInput,
  condition?: ModelMentoringConditionInput | null,
};

export type UpdateMentoringMutation = {
  updateMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMentoringMutationVariables = {
  input: DeleteMentoringInput,
  condition?: ModelMentoringConditionInput | null,
};

export type DeleteMentoringMutation = {
  deleteMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMentoringQueryVariables = {
  id: string,
};

export type GetMentoringQuery = {
  getMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMentoringsQueryVariables = {
  filter?: ModelMentoringFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMentoringsQuery = {
  listMentorings?:  {
    __typename: "ModelMentoringConnection",
    items:  Array< {
      __typename: "Mentoring",
      id: string,
      name: string,
      email?: string | null,
      phone?: string | null,
      company?: string | null,
      site?: string | null,
      employees?: string | null,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMentoringSubscription = {
  onCreateMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMentoringSubscription = {
  onUpdateMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMentoringSubscription = {
  onDeleteMentoring?:  {
    __typename: "Mentoring",
    id: string,
    name: string,
    email?: string | null,
    phone?: string | null,
    company?: string | null,
    site?: string | null,
    employees?: string | null,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
