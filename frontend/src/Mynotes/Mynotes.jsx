import React, { useEffect, useState } from "react";
import MainScreen from "../component/mainScreen";
import { NavLink } from "react-router-dom";
import { Badge, Button } from "react-bootstrap";
import notes from "../notes.js";
import axios from "axios";

const Mynotes = () => {
  const [notes,setNotes]= useState([]);
  const deleteHandler=(id)=>{
      if(window.confirm("Are you sure?")){
           
      }
  }
  const NoteFetch= async ()=>{
     const {data}=await axios.get("http://localhost:5000/api/notes");
      setNotes(pre=>data);
  }

  useEffect(()=>{
    NoteFetch();
  },[]);
  
  return (
    <MainScreen title="Welcome Back Ashish      Kumar Yadav">
      <NavLink to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size-lg>
          Create New Note
        </Button>
      </NavLink>
      {notes.map((note) => {
        return (
          <div class="accordion">
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
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
              <div class="card-body">
                <h4>
                  <div class="badge badge-success">
                    Category- {note.category}
                  </div>
                </h4>
                <blockquote class="blockquote mb-0">
                  <p>{note.content}</p>
                  <footer class="blockquote-footer">Created on - date</footer>
                </blockquote>
              </div>
            </div>
          </div>
        );
      })}
    </MainScreen>
  );
};
export default Mynotes;
