import React, { useState, useEffect } from "react";
import { useThemeStore } from "../Store/UseThemeStore";
import { useAuthStore } from "../Store/useAuthStore";
import { useTaskStore } from "../Store/UseTaskStore";
import { Delete, DeleteIcon, LucideDelete, Trash } from "lucide-react";
import AllTaskTable from "../Component/AllTaskTable";

function AdminDashboard() {
  const { theme, setTheme } = useThemeStore();
  const { tasks, getAllTasks, createTask, getTaskList, UserTask, deleteTask } =
    useTaskStore();
  const { authuser, AllUser, getAllUsers } = useAuthStore(); // Assuming getAllUsers fetches users
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    assignedTo: "",
    isnew: [],
    completed: [],
    failed: [],
    active: [],
    pending: [],
  });
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(formData);
    getAllTasks();
    setIsFormOpen(false);
  };
  useEffect(() => {
    if (selectedUser) {
      getTaskList({ assignedTo: selectedUser.name });
    }
  }, [selectedUser]);
  const darkThemes = [
    "dark",
    "black",
    "luxury",
    "dracula",
    "night",
    "forest",
    "business",
    "synthwave",
    "cyberpunk",
  ];
  return (
    <div
      className={` overflow-y-hidden   min-h-screen flex bg-${theme} text-${
        theme === "dark" ? "white" : "gray-800"
      }`}
    >
      {/* Slidebar */}
      <aside
        className={`w-1/4 p-4 rounded-lg shadow-md bg-${theme} bg-base-300 text-base-content`}
      >
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <ul className="space-y-2">
          {AllUser.map((user) => (
            <li
              key={user._id}
              className={`p-2 rounded cursor-pointer flex items-center border-b-4
          hover:bg-opacity-80 ${
            selectedUser === user._id ? "bg-opacity-60" : ""
          } border-${darkThemes.includes(theme) ? "gray-500" : "gray-600"}`}
              onClick={() => {
                setSelectedUser({ _id: user._id, name: user.name });
              }}
            >
              <img
                src={user.profileIMG || "/avtar.png"}
                alt=""
                className="w-10 h-10 rounded-full mr-4 inline-block"
              />
              {user.name}
            </li>
          ))}
        </ul>
      </aside>

      <div className="flex-1 p-6">
        <div
          className={`shadow-xl rounded-lg p-6  bg-${theme} bg-base-300 text-base-content`}
        >
          <h2 className="text-2xl font-semibold mb-4">
            Tasks for :
            {selectedUser ? ` ${selectedUser.name}` : " Select a User"}
          </h2>
          <button
            onClick={() => {
              setIsFormOpen(!isFormOpen);
            }}
            disabled={!selectedUser}
            className="mb-4 px-4 py-2 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500
          bg-green-600 text-white"
          >
            Add Task
          </button>

          {isFormOpen && (
            <form
              className={`space-y-4 p-6 rounded-lg shadow-lg bg-${theme} bg-base-300 text-base-content`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded focus:outline-none focus:ring-2 ${
                      darkThemes.includes(theme)
                        ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-400"
                        : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    name="status"
                    id="status"
                    value={formData.status}
                    onChange={handleChange}
                    required
                    className={`w-full p-3 rounded focus:outline-none focus:ring-2 ${
                      darkThemes.includes(theme)
                        ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-400"
                        : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"
                    }`}
                  >
                    {/* make hiden option of select status */}
                    <option value="" hidden>
                      Select Status
                    </option>
                    <option value="new">New</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                    <option value="active">Active</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

              {/* Other Fields */}
              {[
                "description",

                "assignedTo",
                "isnew",
                "completed",
                "failed",

                "active",
                "pending",
              ].map((field) => (
                <div key={field}>
                  <label
                    className="block text-sm font-medium mb-1"
                    htmlFor={field}
                  >
                    {field === "isnew"
                      ? "New"
                      : field.charAt(0).toUpperCase() + field.slice(1)}
                  </label>
                  <textarea
                    name={field}
                    id={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`w-full p-3 rounded focus:outline-none focus:ring-2 ${
                      darkThemes.includes(theme)
                        ? "bg-gray-800 text-white border-gray-600 focus:ring-blue-400"
                        : "bg-gray-100 text-gray-900 border-gray-300 focus:ring-blue-500"
                    }`}
                  />
                </div>
              ))}

              {/* Submit and Cancel Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="px-4 py-2 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                bg-blue-600 text-white"
                >
                  Submit
                </button>

                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 rounded hover:opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500
                bg-red-600 text-white"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
        {/* Display All Tasks using AllTaskTable if selected user is null*/}

        {selectedUser === null ? <AllTaskTable /> : null}

        {/* Display Tasks of the selected user using UserTask */}

        <div
          className={`mt-6 shadow-xl rounded-lg p-6 bg-${theme} bg-base-300 text-base-content`}
        >
          <h2 className="text-2xl font-semibold mb-4">Tasks</h2>
          <ul className="space-y-4">
            {UserTask.map((task) => (
              <li
                key={task._id}
                className={`p-4 rounded-lg border-2 border-${
                  darkThemes.includes(theme) ? "gray-500" : "gray-600"
                }`}
              >
                <h3 className="text-xl font-bold">
                  {task.title.replace(/"/g, "").trim().toUpperCase()}
                </h3>
                <p>{task.description.replace(/"/g, "").trim()}</p>
                {task.isnew.length > 0 && <p>New : {task.isnew.join(", ")}</p>}
                {task.completed.length > 0 && (
                  <p>Completed : {task.completed.join(", ")}</p>
                )}
                {task.failed.length > 0 && (
                  <p>Failed : {task.failed.join(", ")}</p>
                )}
                {task.active.length > 0 && (
                  <p>Active : {task.active.join(", ")}</p>
                )}
                {task.active.length > 0 && (
                  <p>Active : {task.active.join(", ")}</p>
                )}

                {/* status button */}
                <button
                  className={`px-2 py-1 rounded text-white ${
                    task.status === "new"
                      ? "bg-blue-500"
                      : task.status === "completed"
                      ? "bg-green-500"
                      : task.status === "failed"
                      ? "bg-red-500"
                      : task.status === "active"
                      ? "bg-yellow-500"
                      : "bg-gray-500"
                  }`}
                >
                  {task.status}
                </button>
                {/* delete button at right side on top*/}
                <button
                  onClick={() => {
                    deleteTask({ taskId: task._id });
                    // refresh the task list
                  }}
                  className=" absolute right-11 mx-[20px] my-[-50px] bg-transparent  hover:text-red-700"
                >
                  <Trash size={20} />
                </button>
              </li>
            ))}
          </ul>

          {UserTask.length === 0 && (
            <p className="text-center text-lg font-semibold">
              {!selectedUser
                ? "Select a user to view their tasks"
                : "Give a task to Employee"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
