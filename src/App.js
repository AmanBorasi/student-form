import React, { useState, useEffect } from "react";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";
import data from "./data/students.json";

function App() {

  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setStudents(data);
      setLoading(false);
    }, 1000);
  }, []);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  const updateStudent = (student) => {
    setStudents(
      students.map((s) => (s.id === student.id ? student : s))
    );
    setEditStudent(null);
  };

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure to delete?")) {
      setStudents(students.filter((s) => s.id !== id));
    }
  };

  return (
    <div className="container">
      <h2>Students Table</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <StudentForm
            addStudent={addStudent}
            updateStudent={updateStudent}
            editStudent={editStudent}
          />

          <StudentTable
            students={students}
            deleteStudent={deleteStudent}
            setEditStudent={setEditStudent}
          />
        </>
      )}
    </div>
  );
}

export default App;