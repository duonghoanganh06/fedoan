import React, { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { useDispatch } from 'react-redux';
import { getStudents } from './actions/students';

const App = () => {
  const [currentID, setCurrentID] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStudents())
  }, [dispatch])

  return (
    <div className="grid-container">
      <Header />
      <Table setCurrentID={setCurrentID} />
      <Form currentID={currentID} setCurrentID={setCurrentID} />
    </div>
  )
}

export default App;