// import API from "aws-amplify";
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import type { NextApiRequest, NextApiResponse } from "next";
import { CreateMentoringInput, CreateMentoringMutation } from "src/API";
import { createMentoring } from "src/graphql/mutations";

const HandlerSubscribe = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === "POST") {
    const { name, email, phone, company, site, employees, description } =
      req.body;
    const createMentoringData: CreateMentoringInput = {
      name,
      email,
      phone,
      company,
      site,
      employees,
      description,
    };

    const createNewMentoring = (await API.graphql({
      query: createMentoring,
      variables: { input: createMentoringData },
      // authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    })) as { data: CreateMentoringMutation };

    console.log(`createNewMentoring`, createNewMentoring);
  } else {
    res.redirect("/");
  }
};

export default HandlerSubscribe;
