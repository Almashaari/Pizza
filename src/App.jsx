import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Base } from './component/Base';
import Header from './component/Header';
import Home from "./component/Home";
import Modal from './component/Modal';
import Order from './component/Order';
import Toppings from './component/Toppings';
import './index.css';
export default function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const location = useLocation;
  const [showModal, setShowModal] = useState(false);


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
    <BrowserRouter location={location} key={location.key}>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <AnimatePresence mode='wait' onExit={ () => setShowModal(false)}>
      <Routes>
        <Route path="/base" element={<Base addBase={addBase} pizza={pizza} />} />
        <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal}/>} />
        <Route path="/toppings" element={<Toppings addTopping={addTopping} pizza={pizza}/>} />
        <Route path="/" element={<Home />} />
      </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
