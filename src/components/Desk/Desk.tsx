import React from "react";
import styles from "./Desk.module.css";
import { Section } from "../Section";
import { IDesk } from "../../interfaces";

export const Desk: React.FC<IDesk> = ({
  sections,
  onChangeSection,
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
            onChange={onChangeSection}
            draggedCardInfo={draggedCardInfo}
            setDraggedCardInfo={setDraggedCardInfo}
          ></Section>
        ))}
      </div>
    </div>
  );
};
