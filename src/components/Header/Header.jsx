import Nav from "components/Nav/Nav"
import Container from "components/reuse/Container/Container"

import css from "./Header.module.css"

const Header = () => {
  return (
      <header className={css.header}>
          <Container>
              <Nav/>
          </Container>
        </header>
  )
}

export default Header