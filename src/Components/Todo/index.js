import React from "react";
import { Trash } from "react-feather";
import Button from "../Boutton";

const Todo = props => (
  <div>
    {props.item}
    <Button onClick={() => props.deleteItem()}>
      <Trash size={16} />
    </Button>
  </div>
);

export default Todo;
