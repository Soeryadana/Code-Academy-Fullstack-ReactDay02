import axios from "axios";
import config from "../config/config";

const list = async () => {
  try {
    const result = await axios.get(`${config.domain}/region`);
    return result.data;
  } catch (error) {
    return await error.message;
  }
};

const deleted = async (id) => {
  try {
    const result = await axios.delete(`${config.domain}/region/${id}`);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const create = async (payload) => {
  try {
    const result = await axios.post(`${config.domain}/region`, payload);
    return result;
  } catch (error) {
    return await error.message;
  }
};

const update = async (updatedRegion) => {
  try {
    // const result = await axios.put(`${config.domain}/region/${updatedRegion.region_id}`, updatedRegion.region_name);
    const result = await axios.put(`${config.domain}/region/${updatedRegion.region_id}`, { name: updatedRegion.region_name });
    return result;
  } catch (error) {
    return await error.message;
  }
};
export default { list, deleted, create, update };
