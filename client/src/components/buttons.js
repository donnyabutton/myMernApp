import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.isFiltering != true) {
      return (
        <div>
          <button
            id="add"
            onClick={() => {
              this.props.onPutDataToDB();
            }}
            className="btn btn-primary btn-sm m-2 shadow"
          >
            ADD
          </button>

          <button
            id="filter"
            onClick={() => {
              this.props.searchHandler();
            }}
            className="btn btn-primary btn-sm m-2"
          >
            filter
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="btn btn-primary btn-sm m-2"
            id="clear"
            onClick={() => {
              this.props.clear();
            }}
          >
            clear
          </button>
        </div>
      );
    }
  }
}

export default Buttons;
