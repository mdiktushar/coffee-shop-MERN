import react, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCart from "./components/CoffeeCart";

function App() {
  // const coffees = useLoaderData();
  const [coffees, setCoffees] = useState(useLoaderData());
  return (
    <>
      <h1 className="text-6xl text-purple-600">
        Hot Hot Cold Coffee: {coffees.length}
      </h1>

      <div className="flex justify-between items-center mx-5 my-6">
        {coffees.map((coffee) => (
          <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
    </>
  );
}

export default App;
