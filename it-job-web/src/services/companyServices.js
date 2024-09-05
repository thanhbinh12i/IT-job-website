import { get } from "../utils/request";

export const getAllCompany = async () => {
      const result = await get("company");
      return result;
}
export const getDetailCompany = async (id) => {
      const result = await get(`company/${id}`);
      return result;
}