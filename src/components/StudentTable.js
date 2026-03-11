import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

function StudentTable({ students, deleteStudent, setEditStudent }) {

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.id}>
            <td>{s.name}</td>
            <td>{s.email}</td>
            <td>{s.age}</td>

            <td>
              <button onClick={() => setEditStudent(s)}>
                Edit
              </button>

              <button onClick={() => deleteStudent(s.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentTable;