import React from "react";
import styles from "./CardEditor.module.css";
import { ICardEditorView } from "../../interfaces";

export const CardEditor: React.FC<ICardEditorView> = ({
  text,
  onChange,
  onSave,
}) => {
  return (
    <div className={styles.cardEditor}>
      <input
        className={styles.cardEditorInput}
        type="text"
        defaultValue={text}
        onChange={onChange}
      />
      <button className={styles.cardEditorBtn} onClick={onSave}>
        Save
      </button>
    </div>
  );
};
