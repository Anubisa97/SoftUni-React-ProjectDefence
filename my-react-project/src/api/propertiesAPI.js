import * as request from "./requester";

const BASE_URL = "http://localhost:3030/jsonstore/properties";

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const properties = Object.values(result);

  return properties;
};

export const getOne = async (propertyId) => request.get(`${BASE_URL}/${propertyId}`);
