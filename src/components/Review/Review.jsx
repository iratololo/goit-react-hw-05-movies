import css from "./Review.module.css"

const Review = ({ data: { author, content }, showModal }) => {
  
  const seeMore = () => {
    showModal({author, content})
  }
  
  return (
    <li className={css.item}>
      <p className={css.name}>{author}</p>
      <p className={css.text}>{content}</p>
      <button onClick={seeMore} type="button" className={css.button}>See more</button>
    </li> 
  )
}

export default Review