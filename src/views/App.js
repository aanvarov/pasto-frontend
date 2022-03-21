import React, { Suspense } from "react";
import { Layout } from "antd";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

import { StyledApp } from "./App.style";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Hello</Button>
      </header>
    </div>
  );
}

export default App;
