import API from "./api";

export const createLostItem = (formData) => {
  return API.post("/items/lost", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
};