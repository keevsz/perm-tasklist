const { Router } = require("express")
const {
  getTasks,
  createTask,
  deleteTask,
  updateTask,
  getTask,
} = require("../controllers/tasks.controller")
const router = Router()

router.get("/tasks", getTasks)
router.get("/tasks/:id", getTask)
router.post("/tasks", createTask)
router.delete("/tasks/:id", deleteTask)
router.put("/tasks/:id", updateTask)

module.exports = router
