import React, { useEffect } from "react"
import { Jumbotron } from "react-bootstrap"
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { selectSpaceAndStories } from "../store/spaceDetails/selectors"
import { fetchSpace } from "../store/spaceDetails/actions"
import StoryCard from "../components/StoryCard"
import "./SpaceDetails.css"

export default function SpaceDetails() {
  const { spaceId } = useParams()
  const dispatch = useDispatch()

  const spaceData = useSelector(selectSpaceAndStories)

  useEffect(() => {
    if (!spaceData.length) {
      dispatch(fetchSpace(spaceId))
    }
  }, [dispatch, spaceData.length, spaceId])

  const space = spaceData.space
  const stories = spaceData.stories

  return (
    <div>
      {!spaceData || !space ? (
        <Jumbotron>
          <h1>Loading...</h1>
        </Jumbotron>
      ) : (
        <>
          <Jumbotron>
            <h1>{space.title}</h1>
            <p>{space.description}</p>
          </Jumbotron>
          <div
            className="SpaceDetails"
            style={{
              backgroundColor: space.backgroundColor,
              color: space.color,
            }}
          >
            {stories.map((story, index) => {
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
