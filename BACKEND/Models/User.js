import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 2
    },
    profileIMG: {
        type: String,
        default: "" // Replace with an actual default image URL
    }
}, { timestamps: true }); // Enables createdAt & updatedAt fields

const User = mongoose.model('User', userSchema);

export default User;