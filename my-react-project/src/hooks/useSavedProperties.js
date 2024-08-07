import { saveProperty } from "../api/saved-properties";

// import { useEffect, useState } from "react";
// import { createProperty, getAll, getLatest, getOne, getOwned, getSavedProperties } from "../api/propertiesAPI";

// export function useGetAllProperties() {
//   const [properties, setProperties] = useState([]);

//   useEffect(() => {
//     getAll().then((result) => setProperties(result));
//   }, []);

//   return [properties, setProperties];
// }

export function useCreateProperties() {
  const propertyCreateHandler = (propertyData) => saveProperty(propertyData);

  return propertyCreateHandler;
}
