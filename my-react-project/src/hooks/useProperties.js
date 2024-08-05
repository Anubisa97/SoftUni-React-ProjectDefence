import { useEffect, useState } from "react";
import { createProperty, getAll, getOne, getOwned } from "../api/propertiesAPI";

export function useGetAllProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getAll().then((result) => setProperties(result));
  }, []);

  return [properties, setProperties];
}

export function useGetOneProperty(propertyId) {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    getOne(propertyId).then((property) => setProperty(property));
  }, []);

  return [property, setProperty];
}

export function useCreateProperties() {
  const propertyCreateHandler = (propertyData) => createProperty(propertyData);

  return propertyCreateHandler;
}

export function useGetOwnerProperties(ownerId) {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    getOwned(ownerId).then((property) => setProperty(property));
  }, []);

  return [property, setProperty];
}