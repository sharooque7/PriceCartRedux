import React from "react";
import CardWrapper from "../UI/Card";
import { useSelector, useDispatch } from "react-redux";
import { CounterActions } from "../store/context-redux";
import { Button, Card } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const star = () => {
  return <FontAwesomeIcon icon={faStar} />;
};

const BCard = (props) => {
  return (
    <Card
      className="mt-5 mb-5 mx-5 "
      style={{ width: "16rem", height: "23rem" }}
    >
      <Card.Img variant="top" src="https://place-hold.it/450x300" />
      <Card.Body className="text-center">
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.Price}</Card.Text>
        <star />
        <Button
          disabled={props.toggle}
          className="mt-5"
          variant="outline-secondary"
          onClick={() => {
            props.hanldeToggle(props.id);
          }}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};
const BootstrapCard = () => {
  const dispatch = useDispatch();
  const List = useSelector((state) => state.counter.CartList);
  const hanldeToggle = (id) => {
    dispatch(CounterActions.showall(id));
  };

  return (
    <CardWrapper col="col-12 ">
      <div className="row">
        {List.map((Items) => (
          <div className="col-3">
            {Items.toggle}
            <BCard
              key={Items.id}
              toggle={Items.toggle}
              hanldeToggle={hanldeToggle}
              id={Items.id}
              Title={Items.Title}
              Price={Items.Price}
            />
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};
export default BootstrapCard;
