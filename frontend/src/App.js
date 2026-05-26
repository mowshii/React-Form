import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPage from './FormPage';
import DataPage from './DataPage';

function App() {

  const [students, setStudents] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const [editStudent, setEditStudent] = useState(null);

  const addStudent = (studentData) => {

    if (editIndex !== null) {

      const updatedStudents = [...students];

      updatedStudents[editIndex] = studentData;

      setStudents(updatedStudents);

      setEditIndex(null);

      setEditStudent(null);

    } else {

      setStudents([...students, studentData]);

    }
  };

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={
            <FormPage
              addStudent={addStudent}
              editStudent={editStudent}
            />
          }
        />

        <Route
          path="/data"
          element={
            <DataPage
              students={students}
              setStudents={setStudents}
              setEditIndex={setEditIndex}
              setEditStudent={setEditStudent}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;