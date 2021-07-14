import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../store/context-redux";
import { Button, Modal } from "react-bootstrap/";

const CartModal = (props) => {
  const List = useSelector((state) => state.counter.CartList);

  const dispatch = useDispatch();
  let MappedList = List.filter((item) => {
    if (item.toggle === true) {
      return item;
    }
    return false;
  });

  const handleIncrement = (id) => {
    console.log(id);
    dispatch(CounterActions.increment(id));
  };
  const handleDecrement = (id) => {
    dispatch(CounterActions.decrement(id));
  };
  const handleRemove = (id) => {
    dispatch(CounterActions.removeitem(id));
  };
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Products Ordered</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {MappedList.length === 0 && <span>Nothing to display</span>}
            {MappedList.map((item) => (
              <li
                key={item.id}
                className="d-flex justify-content-between align-items-center py-2"
              >
                <span>
                  {item.Title} {item.count}
                </span>
                <span>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => {
                      handleIncrement(item.id);
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => {
                      handleDecrement(item.id);
                    }}
                  >
                    -
                  </button>
                  <button
                    className="btn btn-dark mx-2"
                    onClick={() => {
                      handleRemove(item.id);
                    }}
                  >
                    X
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartModal;
