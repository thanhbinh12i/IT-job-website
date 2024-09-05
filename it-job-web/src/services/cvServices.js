import { post } from "../utils/request";

export const createCV = async (options) => {
      const result = await post("cv",options);
      return result;
}