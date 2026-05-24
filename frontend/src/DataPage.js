import React from 'react';
import { Link } from 'react-router-dom';

function DataPage({ students }) {

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.heading}>
          Student Records
        </h1>

        <Link to="/">
          <button style={styles.button}>
            Add New Student
          </button>
        </Link>

        <table style={styles.table}>

          <thead>

            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>Department</th>
              <th>Office</th>
            </tr>

          </thead>

          <tbody>

            {
              students.map((student, index) => (

                <tr key={index}>

                  <td>
                    {student.firstName} {student.lastName}
                  </td>

                  <td>{student.age}</td>

                  <td>{student.gender}</td>

                  <td>{student.email}</td>

                  <td>{student.department}</td>

                  <td>{student.office}</td>

                </tr>
              ))
            }

          </tbody>

        </table>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: '100vh',
    background: '#eef2ff',
    padding: '40px'
  },

  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0px 5px 20px rgba(0,0,0,0.1)'
  },

  heading: {
    textAlign: 'center',
    marginBottom: '20px'
  },

  button: {
    padding: '10px 20px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    marginBottom: '20px',
    cursor: 'pointer'
  },

  table: {
    width: '100%',
    borderCollapse: 'collapse'
  }

};

export default DataPage;