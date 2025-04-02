import React, { useEffect } from "react";
import { useTaskStore } from "../Store/UseTaskStore";
import { useThemeStore } from "../Store/UseThemeStore";
import { useAuthStore } from "../Store/useAuthStore";

function AllTaskTable() {
  const { tasks, getAllTasks } = useTaskStore();
  const { AllUser } = useAuthStore();
  const { theme } = useThemeStore();

  useEffect(() => {
    getAllTasks();
  }, []);

  const employeeEmails = [
    "jeyur@gmail.com",
    "meet@gmail.com",
    "priya@gmail.com",
    "tushar@gmail.com",
    "urmila@gmail.com",
    "shruti@gmail.com",
  ];

  const employeeUsers =
    AllUser?.filter((user) => employeeEmails.includes(user.email)) || [];

  return (
    <div
      className={`flex justify-center items-center bg-${theme} text-base-content   p-4`}
    >
      <div className="bg-base-300 w-full border  rounded-xl p-4">
        <ul className="w-full border-b pb-2 font-bold text-center grid grid-cols-6">
          <li>Employee Name</li>
          <li>New</li>
          <li>Completed</li>
          <li>Failed</li>
          <li>Active</li>
          <li>Pending</li>
        </ul>
        {employeeUsers.map((employee) => {
          const userTasks =
            tasks?.filter((task) => task.assignedTo === employee._id) || [];

          const newTaskCount =
            userTasks.filter((task) => task.new)?.length || 0;
          const activeTaskCount =
            userTasks.filter((task) => task.active)?.length || 0;
          const completedTaskCount =
            userTasks.filter((task) => task.completed)?.length || 0;
          const failedTaskCount =
            userTasks.filter((task) => task.failed)?.length || 0;
          const countedTasks =
            newTaskCount +
            activeTaskCount +
            completedTaskCount +
            failedTaskCount;
          const pendingTaskCount = Math.max(userTasks.length - countedTasks, 0);

          return (
            <ul
              key={employee.email}
              className="w-full text-center grid grid-cols-6 border-t py-2"
            >
              <li>{employee.name}</li>
              <li>{newTaskCount}</li>
              <li>{completedTaskCount}</li>
              <li>{failedTaskCount}</li>
              <li>{activeTaskCount}</li>
              <li>{pendingTaskCount}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default AllTaskTable;
