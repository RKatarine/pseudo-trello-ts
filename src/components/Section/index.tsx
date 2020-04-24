import React from "react";
import { observer } from "mobx-react";
import { nanoid } from "nanoid";

import { Section } from "./Section";

import { ICard, IBefore } from "../../interfaces";

class SectionAction extends React.Component<IBefore, {}> {
  setCards = (cards: Array<ICard>) => {
    const { props } = this;
    props.onChangeSection({
      id: props.id,
      title: props.title,
      cards,
    });
  };

  onEditCard = (editedCardData: ICard): void => {
    const cards: Array<ICard> = this.props.cards;
    const editedCardIndex = cards.findIndex(
      (card) => card.id === editedCardData.id
    );
    if (editedCardIndex === -1) {
      return;
    }
    const newCards = [
      ...cards.slice(0, editedCardIndex),
      {
        ...cards[editedCardIndex],
        ...editedCardData,
      },
      ...cards.slice(editedCardIndex + 1),
    ];
    this.setCards(newCards);
  };

  onAddCard = (): void => {
    const { props } = this;
    const id = nanoid();
    const newCards: Array<ICard> = [...props.cards, { id, text: "" }];
    this.setCards(newCards);
  };

  render() {
    return (
      <Section
        onEditCard={this.onEditCard}
        onAddCard={this.onAddCard}
        {...this.props}
      />
    );
  }
}

const WrappedSection: React.ComponentType<IBefore> = observer(SectionAction);

export default WrappedSection;
