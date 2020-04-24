import React from "react";
import styles from "./Desk.module.css";
import WrappedSection from "../Section";
import { IDesk } from "../../interfaces";

export const Desk: React.FC<IDesk> = ({
  sections,
  changeCardSection,
  onChangeSection,
  draggedCardInfo,
  setDraggedCardInfo,
}) => {
  return (
    <div className={styles.board} tabIndex={0} onKeyDown={changeCardSection}>
      <div className={styles.wrapper}>
        {sections.map((section) => (
          <WrappedSection
            key={section.id}
            {...section}
            onChangeSection={onChangeSection}
            draggedCardInfo={draggedCardInfo}
            setDraggedCardInfo={setDraggedCardInfo}
          ></WrappedSection>
        ))}
      </div>
    </div>
  );
};
