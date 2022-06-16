import request from "../utils/request";

interface IUser {
  user: string;
  age: string;
}

request<IUser>("/", "get").then((res) => {
  console.log(res.data.age);
});
