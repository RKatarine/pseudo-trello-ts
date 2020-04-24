import { Card } from "./Card";

import React, { ChangeEvent } from "react";
import { observer } from "mobx-react";

import { IBeforeCard } from "../../interfaces";
import { action, observable } from "mobx";
import { CardEditor } from "../CardEditor";

class CardAction extends React.Component<IBeforeCard, {}> {
  @observable
  public isEditing: boolean = false;

  @observable
  public text: string = this.props.text;

  @action
  setEditingMode = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    this.isEditing = true;
  };

  @action
  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value;
    this.text = value;
  };

  @action
  onSave = () => {
    const { id, onEditCard } = this.props;
    onEditCard({ id, text: this.text });
    this.isEditing = false;
  };

  render() {
    return !this.isEditing ? (
      <Card setEditingMode={this.setEditingMode} {...this.props} />
    ) : (
      <CardEditor
        text={this.text}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}

const WrappedCard: React.ComponentType<IBeforeCard> = observer(CardAction);

export { WrappedCard };
