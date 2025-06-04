'use strict';

var SplashScreen = React.createClass({displayName: "SplashScreen",
  handleClick: function() {
    if (this.props.onStart) {
      this.props.onStart();
    }
  },
  
  render: function() {
    return (
      React.createElement("div", {className: "splashscreen text-center"},
        React.createElement("h1", {className: "splash-title"}, "Is each term from Christianity or Warhammer 40K?"),
        React.createElement("h2", {className: "splash-subtitle"}, "Test your knowledge"),
        React.createElement("button", {
          className: "btn btn-primary btn-lg start-button",
          onClick: this.handleClick
        }, "I'm ready!")
      )
    );
  }
});

