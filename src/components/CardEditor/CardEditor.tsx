import React from "react";
import classes from "./CardEditor.module.css";
import { ICardEditorView } from "../../interfaces";

export const CardEditor: React.FC<ICardEditorView> = ({
  text,
  onChange,
  onSave,
}) => {
  return (
    <div className={classes["cardEditor"]}>
      <input
        className={classes["cardEditorInput"]}
        type="text"
        defaultValue={text}
        onChange={onChange}
      />
      <button className={classes["cardEditorBtn"]} onClick={onSave}>
        Save
      </button>
    </div>
  );
};
