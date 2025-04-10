import { create } from "zustand";
import { axiosInstance } from "../lib/Axios";

import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000";

export const useLeaveStore = create((set) => ({
  leave: [],
  leaveHistory: [],
  // Update Leave Status (Approve/Reject)
  updateLeaveStatus: async (data) => {
    try {
      const res = await axiosInstance.patch(
        `/leave/status/${data.id}`,
        { status: data.status } // ✅ Send as object
      );
      console.log(res.data);
      console.log("Leave status updated successfully");
    } catch (error) {
      console.log(
        "Error in updateLeaveStatus:",
        error.response?.data || error.message
      );
    }
  },

  // Get Leaves by Employee email
  EmployeeIdLeave: [],
  getEmployeeLeave: async (data) => {
    try {
      const res = await axiosInstance.get(`/leave/employee/${data}`);
      set({ EmployeeIdLeave: res.data });
      console.log(data);
      console.log(res.data);
      console.log("Employee leave fetched successfully");
    } catch (error) {
      console.log(
        "Error in getEmployeeLeave:",
        error.response?.data || error.message
      );
    }
  },
  leaveRequest: async (data) => {
    try {
      const res = await axiosInstance.post("/leave/LeaveForm", data);
      set({ leave: res.data });
      toast.success("Leave request sent successfully!");
      console.log("Leave request sent successfully");
    } catch (error) {
      console.log(
        "Error in leaveRequest:",
        error.response?.data || error.message
      );
    }
  },

  getLeaveHistory: async () => {
    try {
      const res = await axiosInstance.get("/leave/all");
      set({ leaveHistory: res.data });
      console.log("Leave history fetched successfully");
    } catch (error) {
      console.log(
        "Error in getLeaveHistory:",
        error.response?.data || error.message
      );
    }
  },

  deleteLeave: async ({ leaveId }) => {
    try {
      const res = await axiosInstance.delete(`/leave/${leaveId}`);
      console.log("Leave request deleted successfully");
    } catch (error) {
      console.log(
        "Error in deleteLeave:",
        error.response?.data || error.message
      );
    }
  },
}));
export default useLeaveStore;
