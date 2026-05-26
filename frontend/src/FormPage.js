import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormPage({ addStudent, editStudent }) {

  const navigate = useNavigate();

 const [formData, setFormData] = useState(
  editStudent || {
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    country: '',
    department: '',
    office: ''
  }
);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addStudent(formData);

    alert("Student Added Successfully");

    navigate('/data');

    setFormData({
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      country: '',
      department: '',
      college: ''
    });
  };

  return (
    <div style={styles.container}>

      <div style={styles.card}>

        <h1 style={styles.heading}>
          Student Registration
        </h1>

        <form onSubmit={handleSubmit}>

          <div style={styles.grid}>

            <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} style={styles.input} required />

            <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} style={styles.input} required />

            <input type="number" name="age" placeholder="Age" onChange={handleChange} style={styles.input} required />

            <input type="text" name="gender" placeholder="Gender" onChange={handleChange} style={styles.input} required />

            <input type="email" name="email" placeholder="Email" onChange={handleChange} style={styles.input} required />

            <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} style={styles.input} required />

            <input type="text" name="address" placeholder="Address" onChange={handleChange} style={styles.input} required />

            <input type="text" name="city" placeholder="City" onChange={handleChange} style={styles.input} required />

            <input type="text" name="state" placeholder="State" onChange={handleChange} style={styles.input} required />

            <input type="text" name="country" placeholder="Country" onChange={handleChange} style={styles.input} required />

            <input type="text" name="department" placeholder="Department" onChange={handleChange} style={styles.input} required />

            <input type="text" name="office" placeholder="Office Name" onChange={handleChange} style={styles.input} required />

          </div>

          <button type="submit" style={styles.button}>
            {editStudent ? "Update Student" : "Submit"}
          </button>

        </form>

      </div>

    </div>
  );
}

const styles = {

  container: {
    minHeight: '100vh',
    background: '#f0f4f8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px'
  },

  card: {
    background: 'white',
    padding: '30px',
    borderRadius: '15px',
    width: '800px',
    boxShadow: '0px 5px 20px rgba(0,0,0,0.1)'
  },

  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333'
  },

  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '15px'
  },

  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '15px'
  },

  button: {
    width: '100%',
    marginTop: '25px',
    padding: '14px',
    background: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  }

};

export default FormPage;