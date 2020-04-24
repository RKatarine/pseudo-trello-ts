import { Desk } from "./Desk";
import React from "react";
import { observer } from "mobx-react";
import { IDesk, InjectedDeskProps } from "../../interfaces";

import { DeskStore } from "./DeskStore";

const addDeskAction = <P extends InjectedDeskProps>(
  Component: React.FC<IDesk>
) => {
  class DeskAction extends React.Component<{}, {}> {
    private deskStore = new DeskStore();

    render() {
      const {
        sections,
        draggedCardInfo,
        changeCardSection,
        onChangeSection,
        setDraggedCardInfo,
      } = this.deskStore;
      return (
        <Component
          sections={sections}
          draggedCardInfo={draggedCardInfo}
          changeCardSection={changeCardSection}
          onChangeSection={onChangeSection}
          setDraggedCardInfo={setDraggedCardInfo}
        />
      );
    }
  }

  return observer(DeskAction);
};

export default addDeskAction(Desk);
