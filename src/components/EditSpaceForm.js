import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { updateMySpace } from "../store/user/actions"
import "./EditSpaceForm.css"

export default function EditSpaceForm(props) {
  const dispatch = useDispatch()

  const [state, setState] = useState({
    title: props.title,
    description: props.description,
    backgroundColor: props.backgroundColor,
    color: props.color,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevData) => {
      return {
        ...prevData,
        [name]: value,
      }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    const title = state.title
    const description = state.description
    const backgroundColor = state.backgroundColor
    const color = state.color

    dispatch(updateMySpace(title, description, backgroundColor, color))
    setState({
      title: state.title,
      description: state.description,
      backgroundColor: state.backgroundColor,
      color: state.color,
    })
  }

  return (
    <div>
      <form onSubmit={submitForm} className="EditSpaceForm">
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            <strong>Title</strong>
          </label>
          <input
            id="title"
            className="form-control"
            type="text"
            name="title"
            value={state.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <strong>Description</strong>
          </label>
          <textarea
            className="form-control"
            type="textArea"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">
            <strong>Background</strong>
          </label>
          <input
            className="form-control"
            type="color"
            name="backgroundColor"
            value={state.backgroundColor}
            onChange={handleChange}
          />
          <label className="form-label">
            <strong>Text Color</strong>
          </label>
          <input
            className="form-control"
            type="color"
            name="color"
            value={state.color}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Edit Space
        </button>
      </form>
    </div>
  )
}
