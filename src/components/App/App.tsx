import React from "react";
import { Desk } from "../Desk";
import styles from "./App.module.css";

import { IApp } from "../../interfaces";

export const App: React.FC<IApp> = ({ sections, setSections }) => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h2 className={styles.header_text}>My Desk</h2>
      </header>
      <Desk
        sections={sections}
        onChangeSection={setSections}
        setDraggedCardInfo={() => {}}
        changeCardSection={() => {}}
        draggedCardInfo={null}
      />
    </div>
  );
};
