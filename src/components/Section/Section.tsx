import React from "react";
import { WrappedCard } from "../Card";
import classes from "./Section.module.css";
import { ISectionView } from "../../interfaces";

export const Section: React.FC<ISectionView> = ({
  id,
  cards,
  title,
  onAddCard,
  onEditCard,
  draggedCardInfo,
  setDraggedCardInfo,
}) => {
  return (
    <section className={classes["section"]}>
      <header className={classes["section__header"]}>{title}</header>
      <div className={classes["body"]}>
        {cards.map((card) => (
          <WrappedCard
            isActive={
              draggedCardInfo !== null &&
              draggedCardInfo.cardId === card.id &&
              draggedCardInfo.sectionId === id
            }
            onClick={() =>
              setDraggedCardInfo(
                draggedCardInfo && card.id === draggedCardInfo.cardId
                  ? null
                  : {
                      sectionId: id,
                      cardId: card.id,
                    }
              )
            }
            onEditCard={onEditCard}
            key={card.id}
            text={card.text}
            id={card.id}
            showEditButton={false}
          />
        ))}
      </div>
      <footer>
        <button onClick={onAddCard} className={classes["add__card"]}>
          Добавить карточку...
        </button>
      </footer>
    </section>
  );
};
