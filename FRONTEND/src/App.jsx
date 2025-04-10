import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useThemeStore } from "./Store/UseThemeStore";
import Navbar from "./Component/Navbar";
import SettingsPage from "./Pages/SettingPage";
import ProfilePage from "./Pages/ProfilePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";
import SignupPage from "./Pages/SignupPage";
import SigninPage from "./Pages/SigninPage";
import { useAuthStore } from "./Store/useAuthStore";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EmployeeDashboard from "./Pages/EmployeeDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import { Toaster } from "react-hot-toast";
import LeaveForm from "./Pages/LeaveForm";
function App() {
  const { theme } = useThemeStore();
  const { authuser, checkAuth, isCheckingAuth } = useAuthStore();
  const navigate = useNavigate();
  useEffect(() => {
    checkAuth();
  }, []);

  if (isCheckingAuth && !authuser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin"></Loader>
      </div>
    );

  return (
    <div data-theme={theme}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      {/* ✅ Added padding to prevent overlap */}
      <div className="pt-[65px]">
        <Routes>
          <Route
            path="/"
            element={
              authuser ? <HomePage /> : <Navigate to="/signup" replace />
            }
          />
          <Route
            path="/signup"
            element={!authuser ? <SignupPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/signin"
            element={!authuser ? <SigninPage /> : <Navigate to="/" replace />}
          />
          <Route
            path="/about"
            element={
              authuser ? <AboutPage /> : <Navigate to="/signup" replace />
            }
          />
          <Route
            path="/contact"
            element={
              authuser ? <ContactPage /> : <Navigate to="/signup" replace />
            }
          />
          <Route path="/setting" element={<SettingsPage />} />
          <Route
            path="/profile"
            element={
              authuser ? <ProfilePage /> : <Navigate to="/signup" replace />
            }
          />
          <Route path="/login" element={<Navigate to="/signup" replace />} />
          <Route
            path="*"
            element={<h1 className="text-center mt-10">404 Not Found</h1>}
          />
          <Route
            path="/employee-dashboard"
            element={
              authuser ? (
                <EmployeeDashboard />
              ) : (
                <Navigate to="/signup" replace />
              )
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              authuser ? <AdminDashboard /> : <Navigate to="/signup" replace />
            }
          />
          <Route
            path="/LeaveForm"
            element={
              authuser ? <LeaveForm /> : <Navigate to="/signup" replace />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
