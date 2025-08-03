import { useState } from "react";
import { usersdata } from "./usersdata";
function Card() {
  const [users, setUsers] = useState(usersdata);
  return (
    <div style={{ padding: "30px" }}>
      <h2>Users Information in Card Format</h2>
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {users.map(function ({ name, gender, email, city, phone }) {
          return (
            <div
              style={{
                width: "250px",
                height: "250px",
                boxShadow: "0 0 10px black",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              <ul>
                <li>{name}</li>
                <li>{gender}</li>
                <li>{email}</li>
                <li>{city}</li>
                <li>{phone}</li>
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Card;
