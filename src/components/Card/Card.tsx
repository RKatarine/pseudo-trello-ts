import React from "react";
import { EditIcon } from "../common/icons/EditIcon";
import styles from "./Card.module.css";
import { ICardView } from "../../interfaces";

export const Card: React.FC<ICardView> = ({
  text,
  setEditingMode,
  isActive,
  onClick,
}) => {
  return (
    <div onClick={onClick} className={isActive ? styles.active : styles.card}>
      <p className={styles.p}>{text}</p>
      <button onClick={setEditingMode} className={styles.edit__button}>
        <EditIcon className={styles.icon} />
      </button>
    </div>
  );
};
