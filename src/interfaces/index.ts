import React, {ChangeEvent} from "react";

export interface IStyleProps {
  className: string;
}

export interface IKeyboardEvent {
  keyCode: number;
}

export interface ICard {
  id: string;
  text: string;
}

export interface ISection {
  id: number;
  title: string;
  cards: ICard[];
}

export interface IDraggedCardInfo {
  cardId: string;
  sectionId: number;
}

export interface IDesk extends InjectedDeskProps{
}

export interface InjectedDeskProps {
  sections: ISection[];
  onChangeSection: (editedSection: ISection) => void;
  setDraggedCardInfo: (newDraggedCardInfo: IDraggedCardInfo | null) => void;
  changeCardSection: (event: IKeyboardEvent) => void;
  draggedCardInfo: IDraggedCardInfo | null;
}

export interface InjectedSectionProps {
  onAddCard: () => void;
  onEditCard: (editedCardData: ICard) => void;
}

export interface ISectionProps {
  key: number;
  id: number;
  title: string;
  cards: ICard[];
  onChangeSection: (editedSection: ISection) => void;
  draggedCardInfo: IDraggedCardInfo | null;
  setDraggedCardInfo: (newDraggedCardInfo: IDraggedCardInfo | null) => void;
}

export interface ISectionView extends ISectionProps, InjectedSectionProps {}

export interface ICardView {
  text: string;
  setEditingMode: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  isActive: boolean;
  onClick: () => void;
  onEditCard: (editedCardData: ICard) => void;
}

export interface ICardEditorView {
  text:string;
  onChange:(event: ChangeEvent<HTMLInputElement>)=>void;
  onSave:()=>void
}

export interface ICardProps{
  isActive:boolean;
  onClick:()=>void;
  onEditCard:(editedCardData: ICard)=>void;
  key:string;
  id:string;
  text:string;
  showEditButton:boolean
}
