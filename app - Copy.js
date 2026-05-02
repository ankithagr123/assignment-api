const express = require('express');
const logger = require('./middleware/logger');

const app = express();

app.use(express.json());
app.use(logger);

const assignmentRoutes = require('./routes/assignmentRoutes');
const submissionRoutes = require('./routes/submissionRoutes');

app.use('/assignments', assignmentRoutes);
app.use('/submissions', submissionRoutes);

app.get('/', (req, res) => {
    res.send('AssignTrack API is running...');
});

module.exports = app;