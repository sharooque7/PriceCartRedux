import React from "react";
import Card from "../UI/Card";
import style from "./BrandMessage.module.css";

const Headers = () => {
  return (
    <Card col="col-12">
      <div className={style.Message}>
        <h1>Shop in style</h1>
        <h6 className="text-muted">With this shop homepage template</h6>
      </div>
    </Card>
  );
};

export default Headers;
