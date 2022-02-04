import React from "react"
import "./card.css"

export const Card = ({ title, description, tags, className, onClick }) => (
  <div className={`card ${className ? className : ""}`} onClick={onClick}>
    <div className="header">
      <div className="title">{title}</div>
      <div className="tags">{tags}</div>
    </div>
    <div className="body">
      <div className="description">{description}</div>
    </div>
  </div>
)
