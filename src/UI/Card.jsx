import React from "react";

const Card = (props) => {
  return (
    <div className="row">
      <div className={props.col}>{props.children}</div>
    </div>
  );
};

export default Card;
