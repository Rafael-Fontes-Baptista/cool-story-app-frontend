import React from "react"
import "./StoryCard.css"

export default function StoryCard(props) {
  return (
    <div className="StoryCard">
      <h3 className="StoryCard_item">{props.name}</h3>
      <img
        className="StoryCard_item"
        src={props.imageUrl}
        alt={props.name}
      ></img>
      <p className="StoryCard_item">{props.content}</p>
    </div>
  )
}
