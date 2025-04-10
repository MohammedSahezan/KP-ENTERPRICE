import mongoose from 'mongoose';
import User from './User.js'; // Assuming you have a User model
import dotenv from 'dotenv';

dotenv.config();


const leaveSchema = new mongoose.Schema({
    employee: { type: String, required: true },
    email: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
    appliedAt: { type: Date, default: Date.now, required: true },
});

const Leave = mongoose.model('Leave', leaveSchema);

export default Leave;