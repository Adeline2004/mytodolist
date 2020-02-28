import React, { Component } from "react";
import { Plus } from "react-feather";
import styled from "styled-components";
import Button from "../Boutton";

const FormWrapper = styled.div`
  color: #ee6e78;
  font-size: 32px;
  font-family: Raleway;
`;

const Input = styled.input`
  color: #ee6e78;
  height: 28px;
  font-size: 16px;
  font-family: Raleway;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #ee6e78;
  border-radius: 4px;
  &:focus {
    outline-color: #ee6e78;
    outline-style: dashed;
  }
`;

class Form extends Component {
  state = {
    newTask: ""
  };

  handleChange = event => {
    this.setState({ newTask: event.target.value });
  };

  render() {
    const { addNewTask } = this.props;
    const { newTask } = this.state;
    return (
      <FormWrapper>
        <form
          onSubmit={event => {
            event.preventDefault();
            addNewTask(newTask);
            this.setState({ newTask: "" });
          }}
        >
          <Input
            placeholder="Nouvelle tache"
            value={newTask}
            onChange={event => this.handleChange(event)}
          />
          <Button type="submit">
            <Plus size={12} />
          </Button>
        </form>
      </FormWrapper>
    );
  }
}

export default Form;
