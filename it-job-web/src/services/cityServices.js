import { get } from "../utils/request";

export const getListCity = async () => {
      const result = await get("city");
      return result;
}