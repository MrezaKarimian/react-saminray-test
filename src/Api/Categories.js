import instance from "Config/instanceAxios";

const BASE_URL = "/Categories";

const getCategories = ({ queryKey }) => {
  const params = queryKey[1];
  return instance.get(BASE_URL, { params });
};

const getCategorieById = ({ queryKey }) => {
  const params = queryKey[1];
  return instance.get(BASE_URL + "/" + params?.id);
};

const postCategories = async (params) => {
  return await instance.post(BASE_URL, params);
};


export { getCategories, getCategorieById, postCategories };
