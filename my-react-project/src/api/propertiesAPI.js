import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/properties";

export const getAll = async () => {
  const result = await request.get(BASE_URL);
  const properties = Object.values(result);

  return properties;
};

export const getOne = (propertyId) => request.get(`${BASE_URL}/${propertyId}`);

export const createProperty = (propertyData) => request.post(BASE_URL, propertyData);
