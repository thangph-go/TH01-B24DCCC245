import React, {useState} from "react";

function Card({name, age, className}) {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        border: "3px solid gray",
        margin: 10,
        padding: 10
      }}
    >
      <h2>{name}</h2>
      <button onClick={() => setShow(!show)}>
        {show ? "Ẩn chi tiết" : "Xem chi tiết"}
      </button>
      {show && (
        <p>
          Tuổi: {age} - Lớp: {className}
        </p>
      )}
    </div>
  );
}

function StudentCard() {
  const students = [
    {name: "Phạm Văn M", age: 20, className: "CNTT1"},
    {name: "Bùi Thị T", age: 21, className: "CNTT2"},
    {name: "Lê Văn L", age: 19, className: "CNTT3"},
  ];

  return (
    <div>
      {students.map((student, index) => (
        <Card
          key={index}
          name={student.name}
          age={student.age}
          className={student.className}
        />
      ))}
    </div>
  );
}

export default StudentCard;
