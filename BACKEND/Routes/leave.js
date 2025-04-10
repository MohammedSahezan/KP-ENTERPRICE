import express from 'express';

import Leave from '../Models/leave.js';

const router = express.Router();

// Create Leave Request
router.post('/LeaveForm', async(req, res) => {
    try {
        const leave = new Leave(req.body);
        await leave.save();
        res.status(201).json(leave);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Get All Leave Requests (Admin)
router.get('/all', async(req, res) => {
    const leaves = await Leave.find().populate('employee');
    res.json(leaves);
});

// Get Leaves by Employee email
router.get('/employee/:email', async(req, res) => {
    console.log(req.params.email);
    const leaves = await Leave.find({ email: req.params.email });
    res.json(leaves);
});

// Update Leave Status (Approve/Reject)
router.patch('/status/:_id', async(req, res) => {
    const { status } = req.body;

    await Leave.findByIdAndUpdate(req.params._id, { status });
    res.json({ message: 'Status updated' });
});

// Delete Leave Request
router.delete('/:_id', async(req, res) => {
    await Leave.findByIdAndDelete(req.params._id);
    res.json({ message: 'Leave request deleted' });
});


export default router;