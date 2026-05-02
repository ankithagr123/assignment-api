const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    assignmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Assignment',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Submission', submissionSchema);