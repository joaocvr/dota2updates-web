import { POST } from "./";

const USER_CONTEXT = "/user";

const UserService = {
  signup: (data) => POST(USER_CONTEXT + "/signup", data, {}),
};

export default UserService;
