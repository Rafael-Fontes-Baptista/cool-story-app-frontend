import React from "react"
import "./StoryCard.css"

export default function StoryCard(props) {
  return (
    <div className="StoryCard">
      <h3>{props.name}</h3>
      <img src={props.imageUrl} alt={props.name}></img>
      <p>{props.content}</p>
    </div>
  )
}
