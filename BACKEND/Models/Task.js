import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },

    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

    isnew: [],
    active: [],
    completed: [],
    failed: [],
    pending: [],

});

const Task = mongoose.model("Tasks", taskSchema);

export default Task;