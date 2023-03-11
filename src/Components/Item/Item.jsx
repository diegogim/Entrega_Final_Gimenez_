import React from "react";
import ItemRender from "../ItemRender/ItemRender";

const Item = ({ prodList }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "20px",
        padding: "20px 0",
      }}
    >
      {prodList.map((x) => {
        return <ItemRender key={x.id} item={x} />;
      })}
    </div>
  );
};

export default Item;
