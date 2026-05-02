const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');
const Assignment = require('../models/Assignment');

// SUBMIT assignment
router.post('/', async (req, res) => {
    try {
        const { studentName, content, assignmentId } = req.body;

        // validation
        if (!studentName || !content || !assignmentId) {
            return res.status(400).json({ message: 'All fields required' });
        }

        const assignment = await Assignment.findById(assignmentId);

        if (!assignment) {
            return res.status(404).json({ message: 'Assignment not found' });
        }

        // check deadline
        const currentDate = new Date();
        if (currentDate > assignment.dueDate) {
            return res.status(400).json({ message: 'Deadline passed' });
        }

        // check status
        if (assignment.status !== 'active') {
            return res.status(400).json({ message: 'Assignment is closed' });
        }

        const submission = new Submission({
            studentName,
            content,
            assignmentId
        });

        await submission.save();

        res.status(201).json(submission);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET submissions for an assignment
router.get('/:assignmentId', async (req, res) => {
    try {
        const submissions = await Submission.find({
            assignmentId: req.params.assignmentId
        });

        res.json(submissions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;