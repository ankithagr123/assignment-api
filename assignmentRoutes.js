const express = require('express');
const router = express.Router();
const Assignment = require('../models/Assignment');

// CREATE assignment
router.post('/', async (req, res) => {
    try {
        const { title, subject, description, dueDate } = req.body;

        if (!title || !subject || !dueDate) {
            return res.status(400).json({ message: 'Required fields missing' });
        }

        const assignment = new Assignment({
            title,
            subject,
            description,
            dueDate
        });

        await assignment.save();
        res.status(201).json(assignment);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET all assignments
router.get('/', async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.json(assignments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET single assignment
router.get('/:id', async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);

        if (!assignment) {
            return res.status(404).json({ message: 'Not found' });
        }

        // 🔥 ADD THIS LOGIC HERE
        const currentDate = new Date();

        if (assignment.dueDate < currentDate && assignment.status !== 'closed') {
            assignment.status = 'closed';
            await assignment.save();
        }

        res.json(assignment);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE assignment
router.put('/:id', async (req, res) => {
    try {
        const updated = await Assignment.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updated);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE assignment
router.delete('/:id', async (req, res) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Assignment deleted' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;