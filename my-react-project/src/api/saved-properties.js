import * as request from "./requester";

const BASE_URL = "http://localhost:3030/data/saved-properties";

export const getAllSavedProperties = async () => {
  const result = await request.get(`${BASE_URL}/`);
  const properties = Object.values(result);

  return properties;
};

export const saveProperty = (propertyData) => request.post(BASE_URL, propertyData);
