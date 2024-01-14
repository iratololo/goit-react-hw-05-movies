import css from "./Plug.module.css"

const Plug = ({title}) => {
  return (
      <div className={css.plug}><p className={css.title}>{title}</p></div>
  )
}

export default Plug