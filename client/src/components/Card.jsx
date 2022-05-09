import classes from "./Card.module.scss"
import { MdModeEditOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom"

const Card = ({ task, deleteTask }) => {
  const navigate = useNavigate()

  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__content}>
          <div className={classes.card__content__title}>
            <h4 className={classes.card__content__title__content}>
              {task.title}
            </h4>
            <button
              className={classes.card__content__title__editbutton}
              onClick={() => navigate(`/${task.id}/edit`)}
            >
              <MdModeEditOutline color="primary"></MdModeEditOutline>
            </button>
            <button
              className={classes.card__content__title__deletebutton}
              onClick={deleteTask}
            >
              x
            </button>
          </div>
          <div className={classes.card__content__description}>
            <p>{task.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
