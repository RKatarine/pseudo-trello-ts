import React from "react";
import { EditIcon } from "../common/icons/EditIcon";
import classes from "./Card.module.css";
import { ICardView } from "../../interfaces";

export const Card: React.FC<ICardView> = ({
  text,
  setEditingMode,
  isActive,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={isActive ? classes["active"] : classes["card"]}
    >
      <p className={classes["p"]}>{text}</p>
      <button onClick={setEditingMode} className={classes["edit__button"]}>
        <EditIcon className={classes["icon"]} />
      </button>
    </div>
  );
};
