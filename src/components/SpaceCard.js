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
      <h1 className="SpaceCard_item">{props.title}</h1>
      <p className="SpaceCard_item">{props.description}</p>
      <Link to={linkString}>
        <button type="button" className="btn btn-outline-dark SpaceCard_item">
          Visit Space
        </button>
      </Link>
    </div>
  )
}
