import css from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({fn}) => {
  return (
    <button className={css.button} type="button" onClick={fn}>Load more</button>
  )
}

export default LoadMoreBtn