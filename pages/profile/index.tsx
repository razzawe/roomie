import React, { useState, CSSProperties } from 'react';
import { Header } from '../Components/Header';
import { useRouter } from 'next/router';





export default function CreateUser() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // Default empty
  const [hobbies, setHobbies] = useState("");
  const [description, setDescription] = useState("");

  function submitStates(){
     
    router.push('/')
  }

  const styles: { [key: string]: CSSProperties } = {
    container: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr 250px',
      gridTemplateRows: '80px 1fr',
      height: '100vh',
      overflow: 'hidden'
    },
    header: {
      gridColumn: '1 / span 3',
      gridRow: '1',
      borderBottom: '1px solid #eee'
    },
    formContainer: {
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      border: '2px solid black',
      borderRadius: '8px',
    },
    inputGroup: {
      marginBottom: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    },
    label: {
      fontWeight: 'bold'
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '16px'
    },
    select: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '16px',
      backgroundColor: 'white'
    },
    textarea: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '6px',
      fontSize: '16px',
      minHeight: '120px',
      resize: 'vertical'
    },
    submitButton: {
      display: 'block',
      width: '200px',
      margin: '30px auto 0',
      padding: '12px 24px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer'
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      fullName,
      age,
      gender,
      hobbies,
      description
    });
  };

  return (
    <div>
      <div style={styles.header}>
        <Header logoSrc="logo-placeholder.png" />
      </div>

      <div style={styles.formContainer}>
        <h1 className="text-xl flex justify-center mb-6">
          Fill in the following information:
        </h1>

        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name:</label>
            <input
              style={styles.input}
              className="bg-white shadow-lg"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Age:</label>
            <input
              style={styles.input}
              className="bg-white shadow-lg"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Gender:</label>
            <select
              style={styles.select}
              className="bg-white shadow-lg"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Personal Hobbies:</label>
            <input
              style={styles.input}
              className="bg-white shadow-lg"
              type="text"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Self Description:</label>
            <textarea
              style={styles.textarea}
              className="bg-white shadow-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button 
            type="submit" 
            style={styles.submitButton}
            className="hover:bg-blue-700 transition-colors duration-200"
            onClick={() => submitStates()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
