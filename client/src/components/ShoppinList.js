import React, { Component } from "react";
import { Button, ListGroupItem, ListGroup, Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";
import { connect } from "react-redux";
import fetchItems from "../actions/busketAction";
import PropTypes from "prop-types";

class Shopping extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    const { busket } = this.props.busket;
    return (
      <Container>
        <Button
          color='dark'
          style={{ marginBottom: "2rem" }}
          onClick={() => {
            const name = prompt("Enter Item name");
            if (name) {
              this.setState(state => ({
                busket: [...this.state.busket, { id: uuid(), name }]
              }));
            }
          }}
        >
          Add to Busket
        </Button>
        <ListGroup>
          <TransitionGroup className='shopping-list'>
            {busket.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames='fade'>
                <ListGroupItem>
                  <Button
                    className='remove-btn'
                    color='danger'
                    size='sm'
                    onClick={() => {
                      this.setState(state => ({
                        busket: state.busket.filter(item => item.id !== id)
                      }));
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
Shopping.propTypes = {
  fetchItems: PropTypes.func.isRequired,
  bucket: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  busket: state.bucket
});
// export default Shopping;
export default connect(
  mapStateToProps,
  { fetchItems }
)(Shopping);
