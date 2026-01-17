import React from "react";
import ReactDOM from "react-dom/client";
import { or } from "sequelize";

// React.creatElement=>React.element-( JS OBJECT)=>HTMLElement(render)
// Create nested React Elements
// const parent =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[ React.createElement("h1",{key:"h1"},"h1 tag"),React.createElement("h2",{ key:"h2"},"h2 tag")]));

// JSX =>Babel transpiles it to React.creatElement=>React.element-( JS OBJECT)=>HTMLElement(render)

const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);
// OR
const jsxHeading=<h1>hello</h1>;

// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component
// Title component is functional component
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}
// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/>
      {/* we can also use Title() */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<HeaderComponent/>);