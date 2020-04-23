import { observable, action } from "mobx";
import { sections } from "../../stubs/sections";
import {
  IDraggedCardInfo,
  IKeyboardEvent,
  ISection,
  ICard,
} from "../../interfaces";

const LEFT_KEY = 37;
const RIGHT_KEY = 39;

export class DeskStore {
  @observable
  public sections: Array<ISection> = sections;

  @observable
  public draggedCardInfo: IDraggedCardInfo | null = null;

  @action
  setSections = (newSections: Array<ISection>) => {
    this.sections = newSections;
  };

  @action
  setDraggedCardInfo = (newDraggedCardInfo: IDraggedCardInfo | null) => {
    if (newDraggedCardInfo !== null) {
      this.draggedCardInfo = newDraggedCardInfo;
    }
  };

  @action
  onChangeSection = (editedSection: ISection) => {
    const { sections } = this;
    const editedSectionIndex = sections.findIndex(
      (section) => section.id === editedSection.id
    );
    if (editedSectionIndex === -1) {
      return;
    }
    const newSections = [
      ...sections.slice(0, editedSectionIndex),
      { ...sections[editedSectionIndex], ...editedSection },
      ...sections.slice(editedSectionIndex + 1),
    ];
    this.setSections(newSections);
  };

  @action
  changeCardSection = (event: IKeyboardEvent) => {
    const { keyCode } = event;
    const { draggedCardInfo, sections } = this;
    if (!draggedCardInfo) {
      return;
    }
    const currentSectionIndex = sections.findIndex(
      (section) => section.id === draggedCardInfo.sectionId
    );
    const cardIndex = sections[currentSectionIndex].cards.findIndex(
      (card: ICard) => card.id === draggedCardInfo.cardId
    );
    let nextSectionIndex = 0;
    if (keyCode === LEFT_KEY && currentSectionIndex !== 0) {
      nextSectionIndex = currentSectionIndex - 1;
    }
    if (keyCode === RIGHT_KEY && currentSectionIndex !== sections.length - 1) {
      nextSectionIndex = currentSectionIndex + 1;
    }
    if (currentSectionIndex === nextSectionIndex) {
      return;
    }
    let nextSection = sections[nextSectionIndex];
    let currentSection = sections[currentSectionIndex];
    nextSection = {
      ...nextSection,
      cards: [...nextSection.cards, currentSection.cards[cardIndex]],
    };
    currentSection = {
      ...currentSection,
      cards: currentSection.cards.filter(
        (_, index: number) => index !== cardIndex
      ),
    };
    const newSections =
      nextSectionIndex > currentSectionIndex
        ? [
            ...sections.slice(0, currentSectionIndex),
            currentSection,
            ...sections.slice(currentSectionIndex + 1, nextSectionIndex),
            nextSection,
            ...sections.slice(nextSectionIndex + 1),
          ]
        : [
            ...sections.slice(0, nextSectionIndex),
            nextSection,
            ...sections.slice(nextSectionIndex + 1, currentSectionIndex),
            currentSection,
            ...sections.slice(currentSectionIndex + 1),
          ];
    this.setDraggedCardInfo({
      cardId: draggedCardInfo!.cardId,
      sectionId: nextSectionIndex,
    });
    this.setSections(newSections);
  };
}
