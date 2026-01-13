import React from "react";
import ReactDOM from "react-dom/client";

// React element(OBJECT)->HTML(Browser understand)
// Create nested React Elements
const parent =React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[ React.createElement("h1",{key:"h1"},"h1 tag"),React.createElement("h2",{ key:"h2"},"h2 tag")]));
// create root using createRoot
const root =ReactDOM.createRoot(document.getElementById("root"));
// Manipulate the HTML DOM 
root.render(parent);