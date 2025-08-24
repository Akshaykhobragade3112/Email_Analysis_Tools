import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchEmails = () => API.get("/emails");
export const submitEmail = (data) => API.post("/emails", data); 
