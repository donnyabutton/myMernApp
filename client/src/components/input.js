import React, { Component } from "react";
import InputText from "./inputText";
import TechList from "./techList";
import Buttons from "./buttons";
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFiltering: false,
      filterText: null
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.clear = this.clear.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onPutDataToDB = this.onPutDataToDB.bind(this);
  }
  clearBox() {
    document.getElementById("text-box").value = " ";
  }

  searchHandler() {
    this.setState({
      isFiltering: true
    });
  }
  onInputChange(message) {
    this.setState({ message: message });
  }

  onAdd(e) {
    this.setState({ message: e });
  }

  clear() {
    this.setState({ isFiltering: false });
  }

  onPutDataToDB() {
    this.props.onPutDataToDB(this.state.message);
  }

  render() {
    return (
      <div>
        <div className=" sticky-top m-2 shadow" id="input-container">
          <InputText onChange={this.onInputChange} />
          <Buttons
            onPutDataToDB={this.onPutDataToDB}
            searchHandler={this.searchHandler}
            clear={this.clear}
            isFiltering={this.state.isFiltering}
          />
        </div>
        <TechList
          outPutData={this.props.outputData}
          onUpDateDB={this.props.onUpDateDB}
          onOutPutDelete={this.deleteFromDB}
          isFiltering={this.state.isFiltering}
          filterText={this.state.message}
          onOutPutDelete={this.props.onOutPutDelete}
        />
      </div>
    );
  }
}

export default Input;
