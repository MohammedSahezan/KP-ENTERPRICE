import React, { useEffect } from "react";
import { useThemeStore } from "../Store/UseThemeStore";
import { useAuthStore } from "../Store/useAuthStore";
import { useTaskStore } from "../Store/UseTaskStore";
import { useLeaveStore } from "../Store/UseLeaveStore";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const { UserTask, getTaskList } = useTaskStore();
  const { theme } = useThemeStore();
  const { authuser } = useAuthStore();
  const { EmployeeIdLeave, getEmployeeLeave } = useLeaveStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (authuser?.name) {
      getTaskList({ assignedTo: authuser.name });
      getEmployeeLeave(authuser.email);
    }
  }, [authuser?.name, getTaskList, getEmployeeLeave]);

  const tasks = UserTask;

  const themeStyles = {
    light: "bg-gray-100",
    dark: "bg-gray-900",
    cupcake: "bg-pink-100",
    bumblebee: "bg-yellow-300",
    emerald: "bg-green-300",
    corporate: "bg-blue-100",
    synthwave: "bg-purple-900",
    retro: "bg-orange-300",
    cyberpunk: "bg-yellow-400",
    valentine: "bg-pink-500",
    halloween: "bg-orange-600",
    garden: "bg-green-100",
    forest: "bg-green-800",
    aqua: "bg-blue-300",
    lofi: "bg-gray-200",
    pastel: "bg-pink-200",
    fantasy: "bg-purple-200",
    wireframe: "bg-gray-100",
    black: "bg-black",
    luxury: "bg-gray-800",
    dracula: "bg-purple-800",
    cmyk: "bg-cyan-400",
    autumn: "bg-orange-700",
    business: "bg-blue-900",
    acid: "bg-lime-400",
    lemonade: "bg-yellow-200",
    night: "bg-gray-900",
    coffee: "bg-yellow-950",
    winter: "bg-blue-100",
    procyon: "bg-indigo-900",
  };

  const themeTextStyles = {
    light: "text-gray-900",
    dark: "text-white",
    cupcake: "text-pink-900",
    bumblebee: "text-yellow-900",
    emerald: "text-green-900",
    corporate: "text-blue-900",
    synthwave: "text-pink-300",
    retro: "text-orange-900",
    cyberpunk: "text-black",
    valentine: "text-white",
    halloween: "text-black",
    garden: "text-green-900",
    forest: "text-green-300",
    aqua: "text-blue-900",
    lofi: "text-gray-900",
    pastel: "text-pink-900",
    fantasy: "text-purple-900",
    wireframe: "text-gray-600",
    black: "text-white",
    luxury: "text-yellow-300",
    dracula: "text-green-300",
    cmyk: "text-black",
    autumn: "text-yellow-300",
    business: "text-white",
    acid: "text-black",
    lemonade: "text-yellow-900",
    night: "text-gray-300",
    coffee: "text-white",
    winter: "text-blue-900",
    procyon: "text-indigo-200",
  };
  const themeDarkerStyles = {
    light: "bg-gray-300",
    dark: "bg-gray-950",
    cupcake: "bg-pink-200",
    bumblebee: "bg-yellow-400",
    emerald: "bg-green-400",
    corporate: "bg-blue-200",
    synthwave: "bg-purple-800",
    retro: "bg-orange-400",
    cyberpunk: "bg-yellow-500",
    valentine: "bg-pink-600",
    halloween: "bg-orange-700",
    garden: "bg-green-200",
    forest: "bg-green-900",
    aqua: "bg-blue-400",
    lofi: "bg-gray-300",
    pastel: "bg-pink-300",
    fantasy: "bg-purple-300",
    wireframe: "bg-gray-300",
    black: "bg-black",
    luxury: "bg-gray-900",
    dracula: "bg-purple-900",
    cmyk: "bg-cyan-500",
    autumn: "bg-orange-800",
    business: "bg-blue-950",
    acid: "bg-lime-500",
    lemonade: "bg-yellow-300",
    night: "bg-gray-950",
    coffee: "bg-yellow-900",
    winter: "bg-blue-200",
    procyon: "bg-indigo-950",
  };
  const darkerTheme = `${themeDarkerStyles[theme] || "bg-gray-300"} ${
    themeTextStyles[theme] || "text-gray-900"
  }`;

  const appliedTheme = `${themeStyles[theme] || "bg-gray-100"} ${
    themeTextStyles[theme] || "text-gray-900"
  }`;

  return (
    <>
      {/* Header */}
      <div className={`min-h-fit p-6 ${appliedTheme}`}>
        <header className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <div className="flex items-center">
            <img
              src={authuser.profileIMG || "avtar.png"}
              alt="Profile"
              className="w-20 h-[75px] rounded-full mr-4"
            />
            <div>
              <h2 className="text-xl font-bold">{authuser.name}</h2>
              <p className="text-sm">{authuser.email}</p>
            </div>
          </div>
          <button
            onClick={() => navigate("/LeaveForm")}
            className="px-4 py-2 border rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            Leave Form
          </button>
        </header>
      </div>

      {/* Main Content */}
      <main
        className={`grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-10 ${appliedTheme}`}
      >
        {/* Tasks */}
        <div
          className={`rounded-xl p-6 shadow-md overflow-x-auto ${themeDarkerStyles[theme]}`}
        >
          <h3 className="text-lg font-semibold mb-4">Your Tasks</h3>
          <ul className="space-y-4">
            {tasks.map((task, index) => (
              <li
                key={index}
                className={`p-4 border rounded ${
                  themeTextStyles[theme] || "text-gray-900"
                }`}
              >
                <h4 className="font-bold">{task.title}</h4>
                <p>{task.description}</p>
                <span
                  className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded ${
                    task.status === "Pending"
                      ? "bg-yellow-500 text-white"
                      : task.status === "Active"
                      ? "bg-blue-500 text-white"
                      : "bg-green-500 text-white"
                  }`}
                >
                  {task.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Leaves */}
        <div
          className={`rounded-xl p-6 shadow-md overflow-x-auto ${themeDarkerStyles[theme]}`}
        >
          <h3 className="text-2xl font-semibold mb-4">Your Leave Requests</h3>
          <table className="table w-full">
            <thead>
              <tr
                className={`border-b ${
                  themeTextStyles[theme] || "text-gray-900"
                } text-lg`}
              >
                <th className="text-left py-2">Employee</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Reason</th>
                <th className="text-left py-2">Start</th>
                <th className="text-left py-2">End</th>
              </tr>
            </thead>
            <tbody>
              {EmployeeIdLeave.map((leave, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{leave.employee}</td>
                  <td className="py-2">{leave.status}</td>
                  <td className="py-2">{leave.reason}</td>
                  <td className="py-2">{leave.startDate}</td>
                  <td className="py-2">{leave.startDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default EmployeeDashboard;
