import React from "react";
import styles from "./Desk.module.css";
import { Section } from "../Section";
import { IDesk } from "../../interfaces";

export const Desk: React.FC<IDesk> = ({
  sections,
  draggedCardInfo,
  setDraggedCardInfo,
  changeCardSection
}) => {
  return (
    <div className={styles.board} tabIndex={0} onKeyDown={changeCardSection}>
      <div className={styles.wrapper}>
        {sections.map(section => (
          <Section
            key={section.id}
            {...section}
            draggedCardInfo={draggedCardInfo}
            setDraggedCardInfo={setDraggedCardInfo}
            onAddCard={() => {}}
            onEditCard={() => {}}
          ></Section>
        ))}
      </div>
    </div>
  );
};
