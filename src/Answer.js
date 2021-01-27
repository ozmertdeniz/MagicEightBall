import React from "react";

const Answer = ({ answerJson, inputText }) => {
  debugger;
  return (
    <div>
      <h5>Question: {inputText}</h5>
      <h5>Answer: {answerJson.answer}</h5>
      <img alt="" src={answerJson.image} />
    </div>
  );
};
export default Answer;