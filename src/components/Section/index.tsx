import React from "react";
import {observer} from "mobx-react";
import {nanoid} from 'nanoid'

import {Section} from "./Section";

import {ICard, ISection, ISectionView} from "../../interfaces";


type ExcludeSectionViewProps<P>=Pick<P, Exclude<keyof P, 'onAddCard' >>

const addSectionAction = (Component: React.FC<ISectionView>) => {

    class SectionAction extends React.Component<ExcludeSectionViewProps<ISectionView>> {
        setCards = (cards: Array<ICard>) => {
            const {props} = this;
            props.onChangeSection({
                id: props.id,
                title: props.title,
                cards
            });
        };

        onEditCard = (editedCardData: ICard):void => {
            const cards: Array<ICard> = this.props.cards;
            const editedCardIndex = cards.findIndex(
                card => card.id === editedCardData.id
            );
            if (editedCardIndex === -1) {
                return;
            }
            const newCards = [
                ...cards.slice(0, editedCardIndex),
                {
                    ...cards[editedCardIndex],
                    ...editedCardData
                },
                ...cards.slice(editedCardIndex + 1)
            ];
            this.setCards(newCards);
        };

        onAddCard = (): void => {
            const {props} = this;
            const id = nanoid();
            const newCards: Array<ICard> = [...props.cards, {id, text: ""}];
            this.setCards(newCards);
        };

        render() {

            return (
                <Component
                    onEditCard={this.onEditCard}
                    onAddCard={this.onAddCard}
                    {...this.props}
                />
            );
        }
    }

    return observer(SectionAction);
};


export default addSectionAction(Section);