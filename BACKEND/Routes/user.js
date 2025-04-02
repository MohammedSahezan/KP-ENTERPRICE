import express from "express";
import { getAllUsers, getSignupPage, handleSignup, getSigninPage, handleSignin, LogOut, UpdateProfile, checkAuth } from "../Controller/user.js";
import protectedRoute from "../Middleware/protectedRoute.js";

const router = express.Router();

// Signup Routes
router.get('/signup', getSignupPage);
router.post('/signup', handleSignup);

// Signin Routes
router.get('/signin', getSigninPage);
router.post('/signin', handleSignin);

//Logour Routes
router.post('/logout', LogOut);

//user profile routes
router.put('/update-profile', protectedRoute, UpdateProfile)

//check routes

router.get('/check', protectedRoute, checkAuth);

// get all users 

router.get('/get-all-users', getAllUsers);

export default router;