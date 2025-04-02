import React, { useEffect } from "react";
import { useThemeStore } from "../Store/UseThemeStore";
import { useAuthStore } from "../Store/useAuthStore";
import { useTaskStore } from "../Store/UseTaskStore";
function EmployeeDashboard() {
  const { UserTask, getTaskList } = useTaskStore();
  const { theme, setTheme } = useThemeStore();
  const { authuser } = useAuthStore();

  useEffect(() => {
    if (authuser?.name) {
      console.log("useEffect triggered for:", authuser.name);
      getTaskList({ assignedTo: authuser.name });
    }
  }, [authuser?.name, getTaskList]);

  const tasks = UserTask;

  return (
    <div
      className={`min-h-screen p-6 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <header className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <img
            src={authuser.profileIMG || "avtar.png"}
            alt=""
            className="w-20 h-20 rounded-full mr-4"
          />
          <div>
            <h2 className="text-xl font-bold">{authuser.name}</h2>
            <p className="text-sm">{authuser.email}</p>
          </div>
        </div>
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="px-4 py-2 border rounded bg-blue-500 text-white"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </button>
      </header>
      <main>
        <h3 className="text-lg font-semibold mb-4">Your Tasks</h3>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`p-4 border rounded ${
                task.status === "Pending"
                  ? "bg-yellow-100"
                  : task.status === "Active"
                  ? "bg-blue-100"
                  : "bg-green-100"
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
      </main>
    </div>
  );
}

export default EmployeeDashboard;
