import instance from "Config/instanceAxios";

const BASE_URL = "/Posts";

const getPosts = ({ queryKey }) => {
  const params = queryKey[1];
  return instance.get(BASE_URL, { params });
};

const getPostById = ({ queryKey }) => {
  const params = queryKey[1];
  return instance.get(BASE_URL + "/" + params?.id);
};

const postPosts = async (params) => {
  return await instance.post(BASE_URL, params);
};


export { getPosts, postPosts, getPostById };
