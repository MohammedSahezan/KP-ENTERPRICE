import { useState } from "react";
import { useAuthStore } from "../Store/useAuthStore";
import { Camera, Mail, User, Loader2 } from "lucide-react";
import { useThemeStore } from "../Store/UseThemeStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const ProfilePage = () => {
  const { authuser, isUpdatingProfile, updateProfile } = useAuthStore();
  const { theme } = useThemeStore();
  const [selectedImg, setSelectedImg] = useState(null);
  const [name, setName] = useState(authuser?.name || "");
  const [email, setEmail] = useState(authuser?.email || "");

  const navigate = useNavigate();

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const base64Image = reader.result;
      setSelectedImg(base64Image);
      await updateProfile({ profileIMG: base64Image });
    };
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
              <User className="size-10" />
            </div>
            <h1 className="text-3xl font-bold">Edit Profile</h1>
            <p className="text-sm text-base-content/70">
              Update your account information
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="relative">
            <img
              src={selectedImg || authuser.profileIMG || "/avtar.png"}
              className="size-32 rounded-full object-cover border-4 border-base-300"
            />
            <label
              htmlFor="avatar-upload"
              className={`absolute bottom-2 right-2 bg-primary text-primary-content p-2 rounded-full cursor-pointer transition-all duration-200 hover:scale-105 ${
                isUpdatingProfile ? "animate-pulse pointer-events-none" : ""
              }`}
            >
              <Camera className="w-5 h-5" />
              <input
                type="file"
                id="avatar-upload"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={isUpdatingProfile}
              />
            </label>
          </div>
        </div>

        <form className="space-y-6 mt-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-base-content/50" />
            <input
              type="text"
              className="w-full bg-base-100 text-base-content p-3 pl-10 rounded-lg focus:ring-primary focus:outline-none"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-base-content/50" />
            <input
              type="email"
              className="w-full bg-base-100 text-base-content p-3 pl-10 rounded-lg focus:ring-primary focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-content py-3 rounded-lg font-semibold transition-all hover:bg-primary-focus"
            disabled={isUpdatingProfile}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
              toast.success("Profile updated successfully!");
            }}
          >
            {isUpdatingProfile ? (
              <div className="flex items-center justify-center">
                <Loader2 className="animate-spin mr-2" /> Updating...
              </div>
            ) : (
              "Save Changes"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
