import React, { Component } from "react";
import { Button, ListGroupItem, ListGroup, Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import fetchItems from "../actions/busketAction";
import deleteBusketAction from "../actions/deleteItemAction";
import PropTypes from "prop-types";

class Shopping extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  onDeleteClick = id => {
    // deleteBusketAction;
    this.props.deleteBusketAction(id);
  };
  render() {
    const { busket } = this.props.busket;
    const onDeleter = () => {
      const idee = busket.map(anItem => {
        return anItem.id;
      });
      this.onDeleteClick(idee[0]);
      console.log("idee", idee[0]);
    };
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {busket.map(({ id, name }) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={onDeleter}
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
  bucket: PropTypes.object
};

const mapStateToProps = state => ({
  busket: state.bucket
});
// export default Shopping;
export default connect(mapStateToProps, { fetchItems, deleteBusketAction })(
  Shopping
);
