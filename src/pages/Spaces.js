/* eslint-disable react-hooks/rules-of-hooks */
import React from "react"
import { Jumbotron } from "react-bootstrap"
import SpaceFeed from "../components/SpacesFeed"
import "./Spaces.css"

export default function Spaces() {
  return (
    <div>
      <Jumbotron>
        <h1>Spaces</h1>
      </Jumbotron>
      <div className="SpacesPage">
        <SpaceFeed />
      </div>
    </div>
  )
}
