import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { CreateMentoringInput, CreateMentoringMutation } from "src/API";
import { createMentoring } from "src/graphql/mutations";

const ScheduleService = async (data) => {
  const { name, email, phone, company, site, employees, description } = data;
  const createMentoringData: CreateMentoringInput = {
    name,
    email,
    phone,
    company,
    site,
    employees,
    description,
  };
  try {
    await API.graphql({
      query: createMentoring,
      variables: {
        input: createMentoringData,
      },

      authMode: GRAPHQL_AUTH_MODE.API_KEY,
      // authToken: "da2-cgtsf7iiwbdxdpxovtgo2fywda",
    });
    console.log("foi");
  } catch (error) {
    console.log(error);
  }
};

export default ScheduleService;
