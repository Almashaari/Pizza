import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Base } from './component/Base';
import Header from './component/Header';
import Home from "./component/Home";
import Order from './component/Order';
import Toppings from './component/Toppings';
import './index.css';
export default function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    }
    else {
      newToppings = pizza.toppings.filter(topping => topping !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
        <Route path="/order" element={<Order pizza={pizza} />} />
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
