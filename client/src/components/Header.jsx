import React, { useEffect, useState } from "react"
import classes from "./Header.module.scss"
import { AiOutlineMenu } from "react-icons/ai"
import { BiMenuAltRight } from "react-icons/bi"
import { Link } from "react-router-dom"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [size, setSize] = useState({ width: undefined, height: undefined })

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false)
    }
  }, [size.width, menuOpen])

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <h2 className={classes.header__content__logo}>Tasks</h2>

        <nav
          className={`${classes.header__content__nav} ${
            menuOpen ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                List of tasks
              </Link>
            </li>

            <li>
              <Link
                to="/new"
                onClick={() => {
                  setMenuOpen(false)
                }}
              >
                New task
              </Link>
            </li>
          </ul>
        </nav>

        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            ></BiMenuAltRight>
          ) : (
            <AiOutlineMenu
              onClick={() => {
                setMenuOpen(!menuOpen)
              }}
            ></AiOutlineMenu>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
