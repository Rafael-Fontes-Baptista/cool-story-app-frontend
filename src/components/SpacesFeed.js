import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectSpaces } from "../store/spaces/selectors"
import { getSpaces } from "../store/spaces/actions"
import SpaceCard from "./SpaceCard"
import "./SpacesFeed.css"

export default function SpacesFeed() {
  const dispatch = useDispatch()

  const spaces = useSelector(selectSpaces)

  useEffect(() => {
    if (!spaces.length) {
      dispatch(getSpaces())
    }
  }, [dispatch, spaces.length])

  return (
    <div className="SpacesFeed">
      {!spaces ? (
        <p>Loading...</p>
      ) : (
        spaces.map((space, index) => (
          <SpaceCard
            key={index}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
          />
        ))
      )}
    </div>
  )
}
