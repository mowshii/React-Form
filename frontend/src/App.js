import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DataPage from './DataPage';

function App() {

  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    setStudents([...students, studentData]);
  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<FormPage addStudent={addStudent} />}
        />

        <Route
          path="/data"
          element={<DataPage students={students} />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;