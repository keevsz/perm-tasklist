import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import classes from "./TaskForm.module.scss"

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  })
  const navigate = useNavigate()
  const params = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (params) {
      await fetch(`http://localhost:4000/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      })
      navigate("/")
      return
    }

    await fetch("http://localhost:4000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    })
    navigate("/")
  }

  useEffect(() => {
    if (params) fetchTask(params.id)
  }, [])

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:4000/tasks/${id}`)
    const data = await res.json()
    setTask({ title: data.title, description: data.description })
  }

  return (
    <div className="animate__animated animate__fadeIn">
      <div className={classes.container}>
        <form onSubmit={handleSubmit} className={classes.container__form}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => {
              setTask({ ...task, [e.target.name]: e.target.value })
            }}
            className={classes.container__form__title}
            value={task.title}
          />
          <textarea
            type="text"
            name="description"
            placeholder="..."
            onChange={(e) => {
              setTask({ ...task, [e.target.name]: e.target.value })
            }}
            value={task.description}
            className={classes.container__form__description}
          />
          <button className={classes.container__form__button} type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  )
}

export default TaskForm
