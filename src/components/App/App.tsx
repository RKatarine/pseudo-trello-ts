import React from 'react';
import Desk from "../Desk";
import classes from "./App.module.css";

export function App() {
  return (
      <div className={classes['App']}>
        <header className={classes["header"]}>
          <h2 className={classes["header-text"]}>My Desk</h2>
        </header>
        <Desk />
      </div>
  );
}
