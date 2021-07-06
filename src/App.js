import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { createTodo, updateTodo } from "./graphql/mutations";
import { listTodos } from "./graphql/queries";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
    </div>
  );
}

export default App;
