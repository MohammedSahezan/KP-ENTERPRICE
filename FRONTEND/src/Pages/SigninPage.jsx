import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import { useThemeStore } from "../Store/UseThemeStore";
import AuthImagePattern from "../Component/AuthImagePattern";
import { Eye, EyeOff, Loader2, Lock, Mail, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { theme } = useThemeStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { signin, isSignin } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signin(formData);
  };

  return (
    <div
      data-theme={theme}
      className="min-h-screen flex items-center justify-center bg-base-300"
    >
      <div className="flex w-full max-w-4xl bg-base-100 p-8 rounded-2xl shadow-xl overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="w-full md:w-1/2 p-8 text-base-content flex flex-col justify-center">
          <div className="text-center">
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-full bg-primary/20">
                <MessageSquare className="size-10 text-primary" />
              </div>
              <h1 className="text-3xl font-bold">Welcome Back</h1>
              <p className="text-sm text-base-content/80">
                Sign in to your account
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="relative">
              <Mail className="absolute top-3 left-3 text-base-content/50" />
              <input
                type="email"
                className="w-full bg-base-200 text-base-content p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
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
                className="w-full bg-base-200 text-base-content p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
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
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition-all"
              disabled={isSignin}
            >
              {isSignin ? (
                <div className="flex items-center justify-center">
                  <Loader2 className="animate-spin mr-2" /> Signing In...
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
          <div className="text-center mt-4 text-base-content">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Click here to sign up
              </Link>
            </p>
          </div>
        </div>
        {/* Right Side - Image/Pattern */}
        <div className="hidden md:flex w-1/2 bg-base-200 p-8 items-center justify-center">
          <AuthImagePattern
            title="Welcome back!"
            subtitle="Sign in to continue your conversations and catch up with your messages."
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
