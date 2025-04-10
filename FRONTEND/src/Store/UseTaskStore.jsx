import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";

export const useTaskStore = create((set) => ({
  tasks: [],
  UserTask: [],
  createTask: async (data) => {
    try {
      const res = await axiosInstance.post("/task/taskUpload", data);
      console.log("Task uploaded successfully");
    } catch (error) {
      console.log(
        "Error in createTask:",
        error.response?.data || error.message
      );
    }
  },

  getAllTasks: async () => {
    try {
      const res = await axiosInstance.get("/task/AlltaskList");
      set({ tasks: res.data });
    } catch (error) {
      console.log(
        "Error in getAllTasks:",
        error.response?.data || error.message
      );
    }
  },

  getTaskList: async (data) => {
    try {
      const res = await axiosInstance.post("/task/taskList", data);
      set({ UserTask: res.data });
      console.log("Task list fetched successfully");
    } catch (error) {
      console.log(
        "Error in getTaskList:",
        error.response?.data || error.message
      );
    }
  },

  addTask: async (data) => {
    try {
      const res = await axiosInstance.post("/task/taskUpload", data);
      console.log("Task added successfully");
    } catch (error) {
      console.log("Error in addTask:", error.response?.data || error.message);
    }
  },
  updateTask: async (data) => {
    try {
      const res = await axiosInstance.post("/task/taskUpdate", data);
      console.log("Task updated successfully");
    } catch (error) {
      console.log(
        "Error in updateTask:",
        error.response?.data || error.message
      );
    }
  },
  deleteTask: async (data) => {
    try {
      const res = await axiosInstance.post("/task/taskDelete", data);
      console.log(data);
      console.log("Task deleted successfully");
    } catch (error) {
      console.log(
        "Error in deleteTask:",
        error.response?.data || error.message
      );
    }
  },
}));
