import React from "react";
import {EditIcon} from "../common/icons/EditIcon";
import styles from "./Card.module.css";
import { ICardView } from "../../interfaces";

export const Card: React.FC<ICardView> = ({
  text,
  setEditingMode,
  showEditButton,
  isActive,
  onClick
}) => {
  return (
    <div onClick={onClick} className={isActive ? styles.active : styles.card}>
      <p className={styles.p}>{text}</p>
      {showEditButton && (
        <button onClick={setEditingMode} className={styles.edit__button}>
          <EditIcon className={styles.icon} />
        </button>
      )}
    </div>
  );
};
