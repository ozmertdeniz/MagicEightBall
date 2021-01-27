import React from "react";

const Question = ({ handleChange }) => {
  return (
    <div>
      <input onChange={handleChange} type="text" />
    </div>
  );
};
export default Question;
