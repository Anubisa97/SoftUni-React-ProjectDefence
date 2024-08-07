import { useEffect, useState } from "react";
import { createProperty, getAll, getLatest, getOne, getOwned, getSavedProperties } from "../api/propertiesAPI";

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

export function useGetLatestProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    getLatest().then((result) => setProperties(result));
  }, []);

  return [properties, setProperties];
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

export function useGetSavedProperties(userId) {
  const [property, setProperty] = useState([]);
  useEffect(() => {
    getSavedProperties(userId).then((property) => setProperty(property));
  }, []);

  return [property, setProperty];
}
