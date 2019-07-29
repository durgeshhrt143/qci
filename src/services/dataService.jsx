import http from "./httpService";
import { apiEndpoint } from "../config.json";

export function getUlrInfo(data) {
  return http.get(`${apiEndpoint}assets/public_trail/public_trail?ulr=` + data);
}
