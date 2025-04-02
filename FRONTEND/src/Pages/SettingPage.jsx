import { THEMES } from "../constant/Themeconstant";
import { useAuthStore } from "../Store/useAuthStore";
import { Link } from "react-router-dom";
import { useThemeStore } from "../Store/UseThemeStore";
import { Send } from "lucide-react";

const PREVIEW_MESSAGES = [
  { id: 1, content: "Hey! How's it going?", isSent: false },
  {
    id: 2,
    content: "I'm doing great! Just working on some new features.",
    isSent: true,
  },
];

const SettingsPage = () => {
  const { theme, setTheme } = useThemeStore();
  const { authuser, isCheckingAuth } = useAuthStore();
  const employeeEmails = [
    "jeyur@gmail.com",
    "meet@gmail.com",
    "priya@gmail.com",
    "tushar@gmail.com",
    "urmila@gmail.com",
    "shruti@gmail.com",
  ];
  const adminEmail = "mitul@gmail.com";
  const isAdmin = authuser?.email === adminEmail;
  const isEmployee = employeeEmails.includes(authuser?.email);
  return (
    <div className="  container mx-auto px-4 pt-20 max-w-5xl mt-[-50px]">
      <div className="space-y-6">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        {authuser && (
          <>
            <div className="absolute top-[60px] right-[100px] sm:top-[70px] sm:right-[180px] bg-base-300 p-2 rounded-lg shadow-md">
              <Link
                to={
                  isAdmin
                    ? "/admin-dashboard"
                    : isEmployee
                    ? "/employee-dashboard"
                    : "https://www.instagram.com/kp__enterprise/?igsh=dmVkOWkybGNiM2o%3D#"
                }
                className="btn btn-primary bg-transparent text-sm sm:text-base text-base-content hover:text-base-300 px-3 sm:px-4 py-1 sm:py-2 "
                hidden={isAdmin || isEmployee}
              >
                {isAdmin
                  ? "Admin Dashboard"
                  : isEmployee
                  ? "Employee Dashboard"
                  : `Let's Talk`}
              </Link>
            </div>
          </>
        )}

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t, idx) => (
            <button
              key={idx}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="text-lg font-semibold mb-3">Preview</h3>

        <div className="rounded-xl  border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4  bg-base-200">
            <div className="max-w-lg mx-auto">
              {/* Mock Chat UI */}
              <div className="bg-base-100 rounded-xl shadow-sm overflow-hidden">
                {/* Chat Header */}
                <div className="px-4 py-3 border-b border-base-300 bg-base-100">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-content font-medium">
                      J
                    </div>
                    <div>
                      <h3 className="font-medium text-sm">John Doe</h3>
                      <p className="text-xs text-base-content/70">Online</p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="p-4 space-y-4 min-h-[200px] max-h-[200px] overflow-y-auto bg-base-100">
                  {PREVIEW_MESSAGES.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${
                        message.isSent ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`
                          max-w-[80%] rounded-xl p-3 shadow-sm
                          ${
                            message.isSent
                              ? "bg-primary text-primary-content"
                              : "bg-base-200"
                          }
                        `}
                      >
                        <p className="text-sm">{message.content}</p>
                        <p
                          className={`
                            text-[10px] mt-1.5
                            ${
                              message.isSent
                                ? "text-primary-content/70"
                                : "text-base-content/70"
                            }
                          `}
                        >
                          12:00 PM
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-base-300 bg-base-100">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="input input-bordered flex-1 text-sm h-10"
                      placeholder="Type a message..."
                      value="This is a preview"
                      readOnly
                    />
                    <button className="btn btn-primary h-10 min-h-0">
                      <Send size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SettingsPage;
