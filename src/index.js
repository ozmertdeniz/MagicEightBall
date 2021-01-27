import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Question from "./Question";
import Answer from "./Answer";
import ErrorMessage from "./ErrorMessage";

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", errorMessage: "", answer: "", question: "" };
    this.btnClick = this.btnClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  btnClick = () => {
    let url = "https://yesno.wtf/api";
    if (this.state.inputText.includes("?")) {
      this.setState({ errorMessage: "" });
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({ answer: data, question: this.state.inputText })
        );
    } else {
      this.setState({
        errorMessage: "You didn't ask a question!",
        inputText: "",
        answer: "",
        question: ""
      });
    }
  };
  handleChange = event => {
    this.setState({
      inputText: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Magic Eight Ball</h1>
        <h2>Ask your question?</h2>
        <Question
          handleChange={this.handleChange}
          inputText={this.state.inputText}
          value={this.state.inputText}
        />
        <br />
        <button onClick={this.btnClick}>Ask Question</button>
        <ErrorMessage errorMessage={this.state.errorMessage} />
        <Answer
          answerJson={this.state.answer}
          inputText={this.state.question}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<MagicEightBall />, rootElement);

