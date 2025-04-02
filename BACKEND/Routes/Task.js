import express from "express";
import Task from "../Models/Task.js";
import User from "../Models/User.js";
const router = express.Router();

router.get('/taskUpload', (req, res) => {
    return res.send("GET request - taskUpload page");
})

router.post('/taskUpload', async(req, res) => {

    const { title, description, status, assignedTo, isnew, completed, failed, active, pending } = req.body;



    // Find the assignedTo user in the database
    const assignedUser = await User.findOne({ name: assignedTo });
    if (!assignedUser) {
        return res.status(400).json({ message: "Assigned user not found" });
    }

    const task = new Task({
        title,
        description,
        status,
        userId: assignedUser._id,

        assignedTo: assignedUser._id,
        isnew,
        completed,
        failed,
        active,
        pending
    });



    task.save().then(() => {
        console.log("Task uploaded successfully");
    })

    .catch((err) => {
        console.log(err);
    });


    return res.send("POST request - taskUpload page");
})

router.post('/taskList', async(req, res) => {
    const { assignedTo } = req.body;
    const assignedUser = await User.findOne({ name: assignedTo });
    if (!assignedUser) {
        return res.status(400).json({ message: "Assigned user not found" });
    }
    const userId = assignedUser._id;
    await Task.find({ userId: userId })
        .then((tasks) => {
            return res.send(tasks);
        })
        .catch((err) => {
            return res.send("Task list fetch failed");
        });
});

router.post('/taskUpdate', async(req, res) => {

    const { taskId, status } = req.body;
    await Task.findByIdAndUpdate(taskId, { status: status }, { new: true })
        .then(() => {
            return res.send("Task updated successfully");
        })
        .catch((err) => {
            return res.send("Task update failed");
        });
});

router.post('/taskDelete', async(req, res) => {
    const { taskId } = req.body;
    console.log(taskId);
    await Task.findByIdAndDelete(taskId)
        .then(() => {
            return res.send("Task deleted successfully1111111");
        }).catch((err) => {
            return res.send("Task delete failed");
        });
});

router.get('/AlltaskList', async(req, res) => {
    await Task.find()
        .then((tasks) => {
            return res.send(tasks);
        })
        .catch((err) => {
            return res.send("Task list fetch failed");
        });
});

export default router