import { useState } from "react";
import FoodItem from "./components/FoodItem";

function App() {
  const [filter, setFilter] = useState('');

  const foods = [
    {
      id: 0,
      name: "Sushi",
      description: "Sushi is a traditional Japanese dish."
    },
    {
      id: 1,
      name: "Dal",
      description:
        "Dal contains onions, tomatoes and various spices which may be added"
    },
    {
      id: 2,
      name: "Pierogi",
      description:
        "Pierogi involve wrapping dough around a savoury or sweet filling"
    },
    {
      id: 3,
      name: "Kebab",
      description: "Kebab is a popular meal of skewered meat."
    },
    {
      id: 4,
      name: "Dim sum",
      description:
        "Dim sum is a variety of smaller dishes that can be enjoyed both during lunch or dinner"
    }
  ];

  return (
    <div style={{display:"grid", placeItems:"center"}}>
      <input onChange={(e)=>setFilter(e.target.value)}></input>
      <table style={{textAlign:"left"}}>
        <tbody>
          {foods.map((item) => {return <FoodItem key={item.id} id={item.id} name={item.name} description={item.description} filter={filter} />})}
        </tbody>
      </table>
    </div>
  );
}

export default App;
