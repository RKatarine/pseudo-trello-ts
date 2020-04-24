import React from "react";
import classes from "./Desk.module.css";
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
    <div
      className={classes["board"]}
      tabIndex={0}
      onKeyDown={changeCardSection}
    >
      <div className={classes["wrapper"]}>
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
