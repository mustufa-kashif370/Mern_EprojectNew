import axios from "axios";
import { toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

const authService = {
  async register(values) {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, values);
      toast.success("Registration successful!");
      return { result: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.errors || error?.response?.data?.message || error.message;
      toast.error(errorMessage);
      return { result: null, error: errorMessage };
    }
  },

  async login(values) {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, values);
      localStorage.setItem("token", response.data.token);
      toast.success("Login successful!");
      return { result: response.data, error: null };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || error.message;
      toast.error(errorMessage);
      return { result: null, error: errorMessage };
    }
  },

  async verify(token) {
    try {
      const response = await axios.post(
        `${API_URL}/auth/verify`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return { result: response.data, error: null };
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
      return { result: null, error: errorMessage };
    }
  },

  async logout() {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      localStorage.clear();
      toast.success("Logout successful!");
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      toast.error(errorMessage);
    }
  },
};

export default authService;
