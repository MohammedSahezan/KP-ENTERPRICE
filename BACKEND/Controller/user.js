import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cloudinary from "../utils/Cloudinary.js";
import dotenv from "dotenv";
dotenv.config();
const getSignupPage = (req, res) => {
    return res.send("GET request - Signup page");
};

const handleSignup = async(req, res) => {

    const { name, email, password } = req.body;
    try {



        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }


        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword

        });

        // Save the user
        await newUser.save();


        // Create a JWT token
        const token = jwt.sign({ userId: newUser._id, email: newUser.email }, // Payload
            process.env.JWT_SECRET, // Secret key from .env file
            { expiresIn: '3h' } // Token expiration time
        );

        // Set the token as a cookie
        res.cookie('token', token, {
            httpOnly: true, // Cannot be accessed via JavaScript
            secure: process.env.NODE_ENV === 'production', // Only set cookie over HTTPS in production
            maxAge: 10800000 // 3 hour expiration for the cookie
        });


        // Respond with success
        res.status(201).json({

            _id: newUser._id,
            name: newUser.name,
            email: newUser.email
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};

const getSigninPage = (req, res) => {
    return res.send("GET request - Signin page");
};


const handleSignin = async(req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Compare the provided password with the stored hashed password
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // Create a JWT token
        const token = jwt.sign({ userId: existingUser._id, email: existingUser.email }, // Payload
            process.env.JWT_SECRET, // Secret key from .env file
            { expiresIn: '3h' } // Token expiration time
        );

        // Set the token as a cookie
        res.cookie('token', token, {
            httpOnly: true, // Cannot be accessed via JavaScript
            secure: process.env.NODE_ENV === 'production', // Only set cookie over HTTPS in production
            // 3 hour expiration for the cookie
            maxAge: 10800000 // 3 hours in milliseconds
        });

        // Respond with success
        res.status(200).json({

            _id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
            profileIMG: existingUser.profileIMG
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error, please try again later" });
    }
};


const LogOut = (req, res) => {
    try {
        res.cookie("token", "", { maxAge: 0 });
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error inlogout controller", error.message);
        res.status(500).json({ message: "Server error, please try again later" });

    }
};

const UpdateProfile = async(req, res) => {
    try {
        const { profileIMG } = req.body;

        const userid = req.user._id;
        console.log("from update  profile  ", userid);
        if (!userid) {
            return res.status(400).json({ message: "profile pic require" });
        }

        const uploadResponse = await cloudinary.uploader.upload(profileIMG);
        const updateUser = await User.findByIdAndUpdate(userid, { profileIMG: uploadResponse.secure_url }, { new: true })


        res.status(200).json(updateUser);
    } catch (error) {
        console.log("error in update profile", error);
        res.status(500).json({ message: "intarvel server error" });
    }
}

const checkAuth = (req, res) => {
    try {

        res.status(200).json(req.user);

    } catch (error) {
        console.log("error in check", error);
        res.status(500).json({ message: "intarvel server error" });
    }
}

const getAllUsers = async(req, res) => {
    try {
        const allowedEmails = [
            "jeyur@gmail.com",
            "meet@gmail.com",
            "priya@gmail.com",
            "tushar@gmail.com",
            "urmila@gmail.com",
            "shruti@gmail.com",
        ];

        const users = await User.find({ email: { $in: allowedEmails } });

        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getAllUsers:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


export { getAllUsers, getSignupPage, handleSignup, getSigninPage, handleSignin, LogOut, UpdateProfile, checkAuth };