import React from "react";

const Students = [
  { id: 1, name: "Tommy" },
  { id: 2, name: "Tacky" },
  { id: 3, name: "Emily" },
  { id: 4, name: "Cherry" },
];

function AttendanceBook(props) {
  return (
    <ul>
      {Students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
