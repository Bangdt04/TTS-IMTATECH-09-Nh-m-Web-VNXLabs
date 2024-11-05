import { instance } from "@/configs/instance";

export const followUser = (id: string, token: string) => {
  const data = instance.post(
    `/users/follow/${id}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};

export const getFlowUser = (token: string) => {
  const data = instance.get(`/follow`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const getFlowId = (id: string) => {
  const data = instance.get(`/followId/${id}`);
  return data;
};
