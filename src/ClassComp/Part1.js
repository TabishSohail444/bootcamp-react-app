import React from "react";

class Func1 extends React.Component {
  constructor() {
    super();

    this.state = {
      show: true
    };
  }
  render() {
    return (
      <div>
        {this.state.show ? <h1>Hide and Show</h1> : null}

        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          {" "}
          click me{" "}
        </button>
      </div>
    );
  }
}

export default Func1;
