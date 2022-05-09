const pool = require("../db")

const getTasks = async (_, res, next) => {
  try {
    const tasks = await pool.query("SELECT * FROM task")
    res.json(tasks.rows)
  } catch (error) {
    next(error)
  }
}

const getTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id])

    if (task.rows.length === 0)
      return res.status(404).json({ message: "Task not found" })

    res.json(task.rows[0])
  } catch (error) {
    next(error)
  }
}

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body

    const result = await pool.query(
      "INSERT INTO task (title,description) VALUES ($1,$2) RETURNING *",
      [title, description]
    )
    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedTask = await pool.query("DELETE FROM task WHERE id = $1", [id])

    if (deletedTask.rowCount === 0)
      return res.status(404).json({ message: "Task not found" })

    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
}

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params
    const { title, description } = req.body

    const updatedTask = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3",
      [title, description, id]
    )

    if (updatedTask.rows.length === 0)
      return res.status(404).json({ message: "Task not found" })

    res.json(result.rows[0])
  } catch (error) {
    next(error)
  }
}

module.exports = { getTasks, createTask, deleteTask, updateTask, getTask }
