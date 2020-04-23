import {Desk} from "./Desk";
import React from "react";
import { observer } from "mobx-react";
import {IDesk, IDeskProps} from "../../interfaces";

import {DeskStore} from "./DeskStore";


const addDeskAction = (Component: React.FC<IDesk>) => {

    class DeskAction extends React.Component<IDeskProps> {
        private deskStore = new DeskStore();

        render() {
            const {
                sections,
                changeCardSection,
                onChangeSection,
                setDraggedCardInfo,
                draggedCardInfo
            } = this.deskStore;
            return (
                <Component
                    sections={sections}
                    changeCardSection={changeCardSection}
                    onChangeSection={onChangeSection}
                    draggedCardInfo={draggedCardInfo}
                    setDraggedCardInfo={setDraggedCardInfo}
                />
            );
        }
    }

    return observer(DeskAction);
};


export default addDeskAction(Desk);