import React, {useState} from 'react'
import {IState as Props} from '../App'

interface IProps {
  people: Props["people"],
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}

function AddToList({people, setPeople}: IProps) {

  const [input, setInput] = useState({
    name:'',
    age: '',
    note:'',
    img:'',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    setInput({...input,
      [e.target.name]: e.target.value
    });
  }

  const handleClick = (): void =>{
    if(
      !input.name ||
      !input.age ||
      !input.img
    ){ return}


    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ])
  }

  return (
    <div className="AddToList">
      <input 
      type="text"
      placeholder="Name"
      value={input.name}
      name="name"
      onChange={handleChange}
      className="AddToList-input"
      />
      
      <input 
      type="number"
      placeholder="Age"
      value={input.age}
      name="age"
      onChange={handleChange}
      className="AddToList-input"
      />
      
      <input 
      type="text"
      placeholder="Image Url"
      value={input.img}
      name="img"
      onChange={handleChange}
      className="AddToList-input"
      />
      
      <textarea 
      name="note" 
      id="note"
      value={input.note}
      placeholder="Notes"
      onChange={handleChange}>
      </textarea>

      <button 
      onClick={handleClick}
      className="AddToList-btn">Add To Invite List</button>
      
    </div>
  )
}

export default AddToList
