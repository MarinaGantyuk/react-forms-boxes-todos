import React from "react";

function Box({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "blue",
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor,
        }}
      />
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}

export default Box;
