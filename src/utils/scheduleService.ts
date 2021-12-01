import axios from "axios";

const ScheduleService = async (data) => {
  axios
    .post("/api/schedule", data)
    .then(() => {
      data;
    })
    .catch((err) => console.log(err));
};
export default ScheduleService;
