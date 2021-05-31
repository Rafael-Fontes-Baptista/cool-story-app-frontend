import React from "react"
import Nav from "react-bootstrap/Nav"
import { NavLink } from "react-router-dom"

export default function NavbarItem(props) {
  const activeStyle = {
    fontWeight: "bold",
    backgroundColor: "#ff9d5c",
  }

  return (
    <Nav.Item>
      <Nav.Link as={NavLink} to={props.path} activeStyle={activeStyle} exact>
        {props.linkText}
      </Nav.Link>
    </Nav.Item>
  )
}
