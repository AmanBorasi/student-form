import React, { useState, useEffect } from "react";

function StudentForm({ addStudent, updateStudent, editStudent }) {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: ""
  });

  useEffect(() => {
    if (editStudent) {
      setStudent(editStudent);
    }
  }, [editStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.email || !student.age) {
      alert("All fields required");
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;

    if (!emailRegex.test(student.email)) {
      alert("Invalid email");
      return;
    }

    if (editStudent) {
      updateStudent(student);
    } else {
      addStudent(student);
    }

    setStudent({ name: "", email: "", age: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={student.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={student.email}
        onChange={handleChange}
      />

      <input
        name="age"
        placeholder="Age"
        value={student.age}
        onChange={handleChange}
      />

      <button type="submit">
        {editStudent ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;