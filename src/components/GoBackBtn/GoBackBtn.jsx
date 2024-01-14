import css from "./GoBackBtn.module.css"

const GoBackBtn = ({handlerGoBack}) => {
  return (
    <button className={css.button} onClick={handlerGoBack} type="button">Go back</button>
  )
}

export default GoBackBtn