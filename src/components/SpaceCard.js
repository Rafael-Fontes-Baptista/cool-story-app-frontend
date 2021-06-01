import React from "react"
import { Link } from "react-router-dom"
import "./SpaceCard.css"

export default function SpaceCard(props) {
  const style = {
    backgroundColor: `${props.backgroundColor}`,
    color: `${props.color}`,
  }

  const linkString = `/spaces/${props.id}`

  return (
    <div style={style} className="SpaceCard">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Link to={linkString}>
        <button type="button" className="btn btn-outline-dark">
          Visit Space
        </button>
      </Link>
    </div>
  )
}
