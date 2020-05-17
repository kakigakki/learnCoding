import Axios from "axios";

export default function myAxios(config) {
  const instance = Axios.create({
    timeout: 5000,
  });
  return instance(config);
}