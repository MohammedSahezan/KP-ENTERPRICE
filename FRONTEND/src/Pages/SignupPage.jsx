import React, { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import toast from "react-hot-toast";
import { useThemeStore } from "../Store/UseThemeStore";
import {
  Eye,
  EyeOff,
  Mail,
  MessageSquare,
  User,
  Lock,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useThemeStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup, isSignup } = useAuthStore();

  const validateForm = () => {
    if (!formData.name.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 2)
      return toast.error("Password must be at least 2 characters long");
    return true;
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) {
      try {
        await signup(formData);

        // setTimeout(() => {
        //   window.location.reload();
        // }, 500);
      } catch (error) {
        toast.error("Signup failed. Please try again.");
      }
    }
  };
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      data-theme={theme}
    >
      <div className="w-full max-w-md bg-base-200 p-8 rounded-2xl shadow-xl">
        <div className="text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="p-3 rounded-full bg-primary text-primary-content">
              <MessageSquare className="size-10" />
            </div>
            <h1 className="text-3xl font-bold">Join the Chat</h1>
            <p className="text-sm text-base-content/70">
              Sign up to start chatting
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-base-content/50" />
            <input
              type="text"
              className="w-full bg-base-100 text-base-content p-3 pl-10 rounded-lg focus:ring-primary focus:outline-none"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-base-content/50" />
            <input
              type="email"
              className="w-full bg-base-100 text-base-content p-3 pl-10 rounded-lg focus:ring-primary focus:outline-none"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-base-content/50" />
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-base-100 text-base-content p-3 pl-10 rounded-lg focus:ring-primary focus:outline-none"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-base-content/50"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-content py-3 rounded-lg font-semibold transition-all hover:bg-primary-focus"
            disabled={isSignup}
          >
            {isSignup ? (
              <div className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" /> Signing Up...
              </div>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="text-center mt-4 text-base-content">
          <p>
            Already have an account?{" "}
            <Link to="/signin" className="text-primary hover:underline">
              Click here to login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
