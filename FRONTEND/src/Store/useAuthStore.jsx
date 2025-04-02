import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useAuthStore = create((set) => ({
  authuser: null,
  isSignin: false,
  isSignup: false,
  onlineUsers: [],
  isupdating: false,
  isCheckingAuth: true,
  AllUser: [],
  getAllUsers: async () => {
    try {
      const res = await axiosInstance.get("/user/get-all-users");
      set({ AllUser: res.data });
    } catch (error) {
      console.log(
        "Error in getAllUsers:",
        error.response?.data || error.message
      );
    }
  },

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/user/check"); // Ensure correct route

      set({ authuser: res.data });
    } catch (error) {
      console.log(
        "checkAuth() -> Error:",
        error.response?.data || error.message
      );
      set({ authuser: null }); // ✅ Ensure `authuser` is null if error occurs
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSignup: true });
    try {
      const res = await axiosInstance.post("/user/signup", data);
      set({ authuser: res.data });

      toast.success("Signup successful!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signup:", error.response?.data || error.message);
      set({ authuser: null });
    } finally {
      set({ isSignup: false });
    }
  },
  signin: async (data) => {
    set({ isSignin: true });
    try {
      const res = await axiosInstance.post("/user/signin", data);
      set({ authuser: res.data });

      toast.success("Signin successful!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log("Error in signin:", error.response?.data || error.message);
      set({ authuser: null });
    } finally {
      set({ isSignin: false });
    }
  },

  logout: async () => {
    try {
      const res = await axiosInstance.post("/user/logout"); // Wait for the request to complete
      set({ authuser: null });

      toast.success(res.data?.message || "Logout successful!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed. Try again.");
      console.error("Error in logout:", error.response?.data || error.message);
    }
  },
  updateProfile: async (data) => {
    set({ isupdating: true });
    try {
      const res = await axiosInstance.put("/user/update-profile", data);
      set({ authuser: res.data });

      toast.success("Profile Picture has been updated successfully!");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(
        "Error in updateProfile:",
        error.response?.data || error.message
      );
      set({ authuser: null });
    } finally {
      set({ isupdating: false });
    }
  },
}));
