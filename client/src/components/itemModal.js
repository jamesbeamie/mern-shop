import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import AddToBusket from "../actions/addToBusket";

class ItemModal extends Component {
  state = {
    modal: false,
    name: ""
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("sawa", this.state.name);
    const newItem = {
      name: this.state.name
    };

    this.props.AddToBusket(newItem);
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color='dark'
          onClick={this.toggle}
          style={{ marginBottom: "2rem" }}
        >
          Add to Busket
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add to busket</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for='item'>Item</Label>
                <Input
                  type='text'
                  name='name'
                  id='item'
                  placeholder='Add shoppong item'
                  onChange={this.onChange}
                  block
                />
                <Button
                  color='dark'
                  style={{ marginTop: "2rem" }}
                  block
                  onSubmit={this.onSubmit}
                >
                  Add
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  busket: state.busket
});
export default connect(mapStateToProps, { AddToBusket })(ItemModal);
