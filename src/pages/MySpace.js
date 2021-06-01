import React, { useState } from "react"
import { Jumbotron } from "react-bootstrap"
import { useSelector } from "react-redux"
import { selectUser } from "../store/user/selectors"
import StoryCard from "../components/StoryCard"
import EditSpaceForm from "../components/EditSpaceForm"
import "./MySpace.css"

export default function MySpace() {
  const [editMode, set_editMode] = useState(false)
  const user = useSelector(selectUser)
  let space

  if (user) {
    space = user.space
  }

  const toggleEditMode = () => {
    set_editMode(!editMode)
  }

  return (
    <div>
      {!user.space ? (
        <Jumbotron>
          <p>Loading...</p>
        </Jumbotron>
      ) : (
        <>
          <Jumbotron>
            <h1>{space.title}</h1>
            <p>{space.description}</p>
          </Jumbotron>
          <div
            className="MySpace"
            style={{
              backgroundColor: user.space.backgroundColor,
              color: user.space.color,
            }}
          >
            <div>
              <button
                type="button"
                className="btn btn-dark"
                value={editMode}
                onClick={toggleEditMode}
              >
                {!editMode ? "Edit Space Mode" : "Close Edit Mode"}
              </button>
              <button type="button" className="btn btn-outline-dark">
                Post a cool story bro
              </button>
            </div>
            {editMode && (
              <div>
                <EditSpaceForm
                  title={space.title}
                  description={space.description}
                  backgroundColor={space.backgroundColor}
                  color={space.color}
                  onEdit={editMode}
                />
              </div>
            )}
            {user.space.stories?.map((story, index) => {
              return (
                <StoryCard
                  key={index}
                  id={story.id}
                  name={story.name}
                  content={story.content}
                  imageUrl={story.imageUrl}
                />
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
