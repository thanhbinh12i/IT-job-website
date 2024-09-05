import { get } from "../utils/request";

export const getAllJob = async () => {
      const result = await get("jobs");
      return result;
}

export const getDetailJob = async (id) => {
      const result = await get(`jobs/${id}`);
      return result;
}
export const getListJob = async (id) => {
      const result = await get(`jobs?idCompany=${id}`);
      return result;
}