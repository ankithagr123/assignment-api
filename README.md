# Workflow Tracking

## Assignment Workflow & Submission Tracking System

---

## Overview

Workflow Tracking is a backend system designed to manage assignments and track student submissions. It provides APIs to create assignments, submit work, and enforce deadlines.

---

## Problem

Managing assignments manually makes it difficult to track submissions and enforce deadlines.

---

## Solution

This project provides a REST API system to:

* Create assignments
* Submit student work
* Track submissions
* Enforce deadlines

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

---

## Features

* Create and retrieve assignments
* Submit assignments
* Deadline validation (no late submissions)
* Assignment status handling
* View submissions for each assignment
* Logging middleware

---

## API Endpoints

### Assignments

* POST /assignments
* GET /assignments
* GET /assignments/:id

### Submissions

* POST /submissions
* GET /submissions/:assignmentId

---

## How It Works

1. Create an assignment with a due date
2. Store it in MongoDB
3. Submit using assignmentId
4. System checks deadline and status
5. Accepts or rejects submission

---

## Database

MongoDB is used to store:

* Assignments
* Submissions

---

## Middleware

Logs each API request.

---

## Testing

All APIs are tested using Postman.

---

## Conclusion

Workflow Tracking helps in managing assignments efficiently by enforcing deadlines and tracking submissions.

---

## Author

Developed as part of an academic project.