const express = require("express");
const { createTask, getAllTasks, updateTask, deleteTask } = require("../controllers/tasks");

const router = express.Router();

router.get("/tasks", getAllTasks)
router.post("/tasks", createTask )
router.patch("/tasks/:id",updateTask )
router.delete("/tasks/:id", deleteTask);

module.exports = router;