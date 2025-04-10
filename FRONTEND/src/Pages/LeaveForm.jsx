import React from "react";
import { useThemeStore } from "../Store/UseThemeStore";
import { useLeaveStore } from "../Store/UseLeaveStore";
import { useAuthStore } from "../Store/useAuthStore";
function LeaveForm() {
  const { leaveRequest, getEmployeeLeave, EmployeeIdLeave } = useLeaveStore();
  const { theme } = useThemeStore();
  const { authuser } = useAuthStore();
  const [formData, setFormData] = React.useState({
    employee: "",
    email: "",
    reason: "",
    startDate: "",
    endDate: "",
    appliedAt: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      leaveRequest(formData);
      setFormData({
        employee: "",
        email: "",
        reason: "",
        startDate: "",
        endDate: "",
        appliedAt: "",
        status: "Pending",
      });
    } catch (error) {
      console.error("Leave Request Error:", error);
    }
  };

  const themeStyles = {
    light: "bg-gray-100 text-gray-900",
    dark: "bg-gray-900 text-white",
    cupcake: "bg-pink-100 text-pink-900",
    bumblebee: "bg-yellow-300 text-yellow-900",
    emerald: "bg-green-300 text-green-900",
    corporate: "bg-blue-100 text-blue-900",
    synthwave: "bg-purple-900 text-pink-300",
    retro: "bg-orange-300 text-brown-900",
    cyberpunk: "bg-yellow-400 text-black",
    valentine: "bg-pink-500 text-white",
    halloween: "bg-orange-600 text-black",
    garden: "bg-green-100 text-green-900",
    forest: "bg-green-800 text-green-300",
    aqua: "bg-blue-300 text-blue-900",
    lofi: "bg-gray-200 text-gray-900",
    pastel: "bg-pink-200 text-pink-900",
    fantasy: "bg-purple-200 text-purple-900",
    wireframe: "bg-gray-100 text-gray-600",
    black: "bg-black text-white",
    luxury: "bg-gray-800 text-gold-300",
    dracula: "bg-purple-800 text-green-300",
    cmyk: "bg-cyan-400 text-magenta-900",
    autumn: "bg-orange-700 text-yellow-300",
    business: "bg-blue-900 text-white",
    acid: "bg-lime-400 text-black",
    lemonade: "bg-yellow-200 text-yellow-900",
    night: "bg-gray-900 text-gray-300",
    coffee: "bg-brown-800 text-white",
    winter: "bg-blue-100 text-blue-900",
  };

  const selectedTheme = themeStyles[theme] || themeStyles.light;
  const inputBase =
    "shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline";
  const labelStyle = "block text-sm font-bold mb-2";
  const containerStyle = `flex flex-col items-center justify-center min-h-screen transition-all duration-300 ${selectedTheme}`;
  const formCard =
    "bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md";

  const themedInput =
    theme.includes("dark") || ["night", "dracula"].includes(theme)
      ? "bg-gray-700 text-white"
      : "bg-white text-gray-900";

  return (
    <div className={containerStyle}>
      <h1 className="text-2xl font-bold mb-4">Leave Application Form</h1>
      <form className={formCard} onSubmit={handleSubmit}>
        {/* Employee */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="email">
            Employee
          </label>
          <input
            type="text"
            id="employee"
            name="employee"
            value={formData.employee}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className={`${inputBase} ${themedInput}`}
          />
        </div>
        {/* Email */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className={`${inputBase} ${themedInput}`}
          />
        </div>

        {/* Reason */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="reason">
            Reason
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Reason for leave"
            className={`${inputBase} h-[100px] ${themedInput}`}
          />
        </div>

        {/* Start Date */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="startDate">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
            className={`${inputBase} ${themedInput}`}
          />
        </div>

        {/* End Date */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="endDate">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
            className={`${inputBase} ${themedInput}`}
          />
        </div>

        {/* Applied At */}
        <div className="mb-4">
          <label className={labelStyle} htmlFor="appliedAt">
            Applied At
          </label>
          <input
            type="date"
            id="appliedAt"
            name="appliedAt"
            value={formData.appliedAt}
            onChange={handleChange}
            required
            className={`${inputBase} ${themedInput}`}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!authuser.email.includes(formData.email)}
          >
            {console.log(authuser.email)}
            Submit
          </button>
        </div>
      </form>
      <p className="text-xs mt-4">
        &copy; 2023 Leave Application Form. All rights reserved.
      </p>
    </div>
  );
}

export default LeaveForm;
