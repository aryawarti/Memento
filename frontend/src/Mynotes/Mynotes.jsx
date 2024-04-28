import React from "react";
import MainScreen from "../component/mainScreen";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import notes from "../notes.js";

const Mynotes = () => {
  return (
    <MainScreen title="Welcome Back Ashish      Kumar Yadav">
      <NavLink to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size-lg>
          Create New Note
        </Button>
      </NavLink>
      {notes.map((note) => {
        return (
          <div class="card" style={{ margin: 10 }}>
            <div class="card-header" style={{ display: "flex" }}>
              <span
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                {note.title}
              </span>
              <div>
                <Button>Edit</Button>
                <Button variant="danger" className="mx-2">
                  Delete
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </MainScreen>
  );
};
export default Mynotes;
