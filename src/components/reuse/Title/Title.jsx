const Title = ({ level, title, className="" }) => {
    const CustomTag = `h${level}`;
  return (
      <CustomTag className={className}>{title}</CustomTag>
  )
}

export default Title