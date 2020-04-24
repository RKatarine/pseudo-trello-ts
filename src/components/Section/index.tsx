import React from "react";
import { observer } from "mobx-react";
import { nanoid } from "nanoid";

import { Section } from "./Section";

import { ICard, ISectionProps, InjectedSectionProps } from "../../interfaces";

const addSectionAction = <P extends InjectedSectionProps & ISectionProps>(
  ComposeComponent: React.FC<P>
) => {
  class SectionAction extends React.Component<ISectionProps> {
    setCards = (cards: Array<ICard>) => {
      const { props } = this;
      this.props.onChangeSection({
        id: props.id,
        title: props.title,
        cards,
      });
    };
    onAddCard = (): void => {
      const { props } = this;
      const id = nanoid();
      const newCards: Array<ICard> = [...props.cards, { id, text: "" }];
      this.setCards(newCards);
    };

    onEditCard = () => {};

    render() {
      return (
        <ComposeComponent
          {...(this.props as P)}
          onAddCard={this.onAddCard}
          onEditCard={this.onEditCard}
        />
      );
    }
  }

  return observer(SectionAction);
};

const WrappedSection = addSectionAction(Section);

export { WrappedSection };
