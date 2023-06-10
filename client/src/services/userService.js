import http from "./httpService";
import JWTDecode from "jwt-decode";
import { toast } from "react-toastify";

export const signup = async user => {
  const {
    data: { token },
  } = await http.post('http://localhost:5000/api/users/register', user);
  localStorage.setItem("token", token);
};

export const login = async user => {
  const {
    data: { token },
  } = await http.post('http://localhost:5000/api/users/login', user);
  localStorage.setItem("token", token);
   // Decode the token to extract the necessary information
   const decodedToken = JWTDecode(token);
   return {
     isAdmin: decodedToken.isAdmin,
   };
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    return JWTDecode(token);
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  toast.success("התנתקת בהצלחה");
  console.log("LogOut successfully!");
  setTimeout(() => {
    return (window.location = "/");
  }, 5000);
};

export const getJWT = () => localStorage.getItem("token");

export const getUsers = () => http.get('http://localhost:5000/api/users/');
