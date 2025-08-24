import axios from "axios";

const API = axios.create({
  baseURL: "https://email-analysis-tools-backend.onrender.com/api",
});

export const fetchEmails = () => API.get("/emails");
export const submitEmail = (data) => API.post("/emails", data); 
