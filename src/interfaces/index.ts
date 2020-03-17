import React from "react";

export interface ICard {
    id: string,
    title: string,
}

export interface ISection {
    id: string,
    title: string,
    cards: ICard[]
}

export interface IApp {
    sections: ISection[],
    setSections: () => void,
}

export interface IDraggedCardInfo {
    cardId: string,
    sectionId: string,
}

export interface IDesk {
    sections: ISection[],
    onChangeSection: () => void,
    setDraggedCardInfo: () => void,
    changeCardSection: () => void
    draggedCardInfo: IDraggedCardInfo,
}

export interface ISectionView {
    id: string,
    title: string,
    cards: ICard[],
    onAddCard: () => void,
    onEditCard: () => void,
    setDraggedCardInfo: (draggedCardInfo: IDraggedCardInfo | null) => void,
    draggedCardInfo: IDraggedCardInfo
}

export interface ICardView {
    text: string,
    setEditingMode: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    showEditButton: boolean,
    isActive: boolean,
    onClick: () => void
    onEditCard:()=>void,
}