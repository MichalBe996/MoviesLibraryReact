import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <h1 className="card--title">{props.title}</h1>
        <h3 className="card--date">{props.date}</h3>
        <img title={props.over} className="poster--image" src={`https://image.tmdb.org/t/p/original${props.imgSrc}`}></img>
        <span>
            <h3>Rating: {props.rating}</h3>
            <h3></h3>
        </span>
        
    </div>
  )
}

export default Card