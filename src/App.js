import Home from "./components/Home";
import Header from "./components/Header";
import Form from "./components/Form";
import React, { useState, useEffect } from 'react'
import PopUp from "./components/PopUp";

function App() {
  const [form, setForm] = useState(false);
  const [popOpen, setPopOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setPopOpen(true);
    }, 5000);
  },[])
  return (
    <div className="App">
      <Header setForm={setForm}/>
      <Home/>
      <Form form={form} setForm={setForm}/>
      <PopUp popOpen={popOpen} setPopOpen={setPopOpen}/>
    </div>
  );
}

export default App;
