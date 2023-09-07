import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import  Todo  from "./assets/Todo";
import  Actor  from "./Actor";
import Singer from "./Singer";

function App() {

  const actors =['Sakib', 'Raj', 'Jasim', 'Rubel']

  const singers =[
    {id:1, name:'Atif aslam', age:40},
    {id:2, name:'tanver evan', age:28},
    {id:3, name:'Selena gomez', age:30},
    {id:4, name:'Tahsan khan', age:38}
  ]

  return (
    <>
      <h1>Vite + React</h1>

      {
        singers.map(singer=><Singer singer={singer}></Singer>)
      }

      <Actor name={"salman shah"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }


      {/* <Todo task="learn react" isDone={true}></Todo>
      <Todo task="explore core concepts" isDone={false}></Todo> */}
      {/* <Person></Person>
      <Student grade="7th" score="99"></Student>
      <Student grade="8th" score="99"></Student>
      <Student></Student>
      <Device name="laptop" price="45000"></Device>
      <Device name="mobile" price="23000"></Device>
      <Device name="watch" price="3000"></Device>
      <Developer></Developer>
      <Me></Me> */}
    </>
  );
}
function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device: {props.name} price:{props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const person = { name: "sakib", age: 12 };
  return (
    <h3>
      I am {person.name} with age: {age + money}
    </h3>
  );
}

const { grade, score } = { grade: "7", score: "99" };
//   default value deya jay
function Student({ grade = 1, score = 0 }) {
  console.log({ grade, score });
  return (
    <div className="student">
      <h3>This is a Student</h3>
      <p>grade:{grade}</p>
      <p>Score:{score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo Devo</h5>
      <p>Coding:</p>
    </div>
  );
}
function Me() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid purple",
        borderRadius: "10px",
        // evabeo style set kora jay..
      }}
    >
      <h3>Neelima</h3>
      <p>Learning webDev</p>
    </div>
  );
}

export default App;
