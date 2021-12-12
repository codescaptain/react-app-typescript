import {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {

  const [number, setNumber] = useState(5)
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Lebron James",
      url: "https://images.eurohoops.net/2021/11/b49d2654-lebron-625x375.jpg",
      age: 36,
      note: "Allageric to staying on the same team"
    }
  ])


  return (
    <div className="App">
     <h1>People Invited To My Party</h1>
     <List people={people}/>
     <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
