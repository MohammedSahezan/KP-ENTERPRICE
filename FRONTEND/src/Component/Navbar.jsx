import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useThemeStore } from "../Store/UseThemeStore";
import { Settings, User, LogOut, Menu, X, LogIn } from "lucide-react";
import { useAuthStore } from "../Store/useAuthStore";

function Navbar() {
  const { theme } = useThemeStore();
  const [isOpen, setIsOpen] = useState(false);
  const { authuser, logout } = useAuthStore();
  const navigate = useNavigate();

  // Handle logout function properly
  const handleLogout = async () => {
    setIsOpen(false); // Close menu first
    await logout(); // Ensure logout completes
    navigate("/signup", { replace: true }); // Redirect to login page
  };

  const getLightThemeBackground = (theme) => {
    const darkThemes = [
      "dark",
      "black",
      "luxury",
      "night",
      "dracula",
      "coffee",
      "forest",
      "business",
    ];
    const warmThemes = ["autumn", "halloween", "bumblebee", "lemonade"];
    const coolThemes = ["aqua", "winter", "procyon", "emerald", "garden"];
    const neonThemes = ["cyberpunk", "acid", "synthwave"];

    if (darkThemes.includes(theme)) {
      return "rgba(255, 255, 255, 0.15)"; // Light white for dark themes
    } else if (warmThemes.includes(theme)) {
      return "rgba(255, 230, 200, 0.2)"; // Light warm beige
    } else if (coolThemes.includes(theme)) {
      return "rgba(200, 245, 255, 0.2)"; // Light cool blue
    } else if (neonThemes.includes(theme)) {
      return "rgba(255, 255, 100, 0.2)"; // Neon yellow tint
    } else {
      return "rgba(0, 0, 0, 0.05)"; // Light gray for default themes
    }
  };

  return (
    <header
      className={`bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
      backdrop-blur-lg bg-base-100/80 ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left - Logo */}
        <div className="flex items-center ">
          <img
            src="/Untitled-design-9-120x120.png"
            alt="Company Logo"
            className="h-[50px] w-auto p-2 rounded-md"
            style={{
              backgroundColor: getLightThemeBackground(theme),
            }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Center - Navigation Links (Desktop) */}
        <nav className="hidden md:flex gap-6 text-base-content">
          <Link
            to="/"
            className="hover:text-primary font-bold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-primary font-bold transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-primary font-bold transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Right - User Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4 text-base-content">
          <Link to="/setting" className="btn btn-sm gap-2">
            <Settings className="w-4 h-4" />
            <span className="hidden sm:inline">Settings</span>
          </Link>
          <Link to="/profile" className="btn btn-sm gap-2">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Profile</span>
          </Link>
          {authuser ? (
            <button className="btn btn-sm gap-2" onClick={handleLogout}>
              <LogOut className="w-5 h-5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          ) : (
            <Link to="/login" className="btn btn-sm gap-2">
              <LogIn className="w-5 h-5" />
              <span className="hidden sm:inline">Login</span>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-base-100 border-t border-base-300 py-4">
          <nav className="flex flex-col items-center gap-4">
            <Link
              to="/"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/setting"
              className="btn btn-sm gap-2"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="w-4 h-4" />
              <span>Settings</span>
            </Link>
            <Link
              to="/profile"
              className="btn btn-sm gap-2"
              onClick={() => setIsOpen(false)}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </Link>
            {authuser ? (
              <button className="btn btn-sm gap-2" onClick={handleLogout}>
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            ) : (
              <button
                className="btn btn-sm gap-2"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
