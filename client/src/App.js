import React from 'react';
import './App.css';
import { Table } from './components/Table'
import FormModal from './components/FormModal'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className='App'>
      <FormModal />
      <Table />
    </div>
  );
}

export default App;
