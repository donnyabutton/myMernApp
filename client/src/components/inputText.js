import React, { Component } from "react";
class InputText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="navbar navbar-light bg-light ">
        <h4 className=" align-middle text-center">CURRENT TECH TRENDS </h4>

        <input
          type="text"
          id="text-box"
          onChange={e => {
            console.log(e.target.value);
            this.props.onChange(e.target.value);
          }}
          placeholder="Technologies"
        />
      </div>
    );
  }
}

export default InputText;
