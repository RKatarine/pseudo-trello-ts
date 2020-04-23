import React from "react";

export interface ICard {
  id: string;
  text: string;
}

export interface ISection {
  id: number;
  title: string;
  cards: ICard[];
}

export interface IApp {
  sections: ISection[];
  setSections: (newSections: Array<ISection>) => void;
}

export interface IDraggedCardInfo {
  cardId: string;
  sectionId: number;
}

export interface IDesk {
  sections: ISection[];
  onChangeSection: (editedSection: ISection) => void;
  setDraggedCardInfo: (newDraggedCardInfo: IDraggedCardInfo | null) => void;
  changeCardSection: (event: IKeyboardEvent) => void;
  draggedCardInfo: IDraggedCardInfo | null;
}

export interface IDeskProps {}

export interface ISectionView {
  key: number;
  id: number;
  title: string;
  cards: ICard[];
  onChangeSection: (editedSection: ISection) => void;
  setDraggedCardInfo: (draggedCardInfo: IDraggedCardInfo | null) => void;
  draggedCardInfo: IDraggedCardInfo | null;
  onAddCard: () => void;
  onEditCard: (editedCardData: ICard) => void;
}

export interface ICardView {
  text: string;
  setEditingMode: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  showEditButton: boolean;
  isActive: boolean;
  onClick: () => void;
  onEditCard: (editedCardData: ICard) => void;
}

export interface IStyleProps {
  className: string;
}

export interface IKeyboardEvent {
  keyCode: number;
}
