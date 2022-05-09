import React, { useEffect, useState } from "react"
import Card from "./Card"
import classes from "./Card.module.scss"

const TaskList = () => {
  const [tasks, setTasks] = useState([])

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks", {
      method: "GET",
    })
    const data = await res.json()
    setTasks(data)
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    })
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={classes.container}>
        {tasks.map((task) => (
          <Card
            key={task.id}
            task={task}
            deleteTask={() => {
              deleteTask(task.id)
            }}
          ></Card>
        ))}
      </div>
    </div>
  )
}

export default TaskList
