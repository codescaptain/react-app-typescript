import React from 'react'
import {IState as IProps} from '../App'

function List({people}: IProps) {
  const renderList = () => {
    return people.map((person) => (
      <li className="List">
      <div className="List-header">
        <img src={person.url} className="List-img" alt="" />
        <h2>{person.name}</h2>
      </div>
      <p>{person.age} years old</p>
      <p className="List-note">{person.note}</p>
    </li>
    ))
  }
  return (
    <ul>
     {renderList()}
    </ul>
  )
}

export default List
