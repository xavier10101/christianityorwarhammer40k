'use strict';

var Question = React.createClass({displayName: "Question",
  selectWH40KAnswer: function selectWH40KAnswer() {
    this.props.selectAnswer(IS_WH40K);
  },
  selectChristianityAnswer: function selectChristianityAnswer() {
    this.props.selectAnswer(IS_CHRISTIANITY);
  },
  render: function() {
    return (
      React.createElement("div", {className: "question"}, 
        React.createElement("h1", {className: "question-name"}, this.props.question.name), 
        React.createElement("ul", {className: "question-buttons"}, 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-wh40k", onClick: this.selectWH40KAnswer}, "Warhammer 40K")), 
          React.createElement("li", null, React.createElement("button", {className: "btn btn-lg btn-default question-button-christianity", onClick: this.selectChristianityAnswer}, "Christianity"))
        )
      )
    )
  }
});

