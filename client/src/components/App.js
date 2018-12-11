import React, { Component } from "react";
import axios from "axios";
import Input from "./input";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      id: 0,
      message: null,
      intervalIsSet: false,
      idToDelete: null,
      idToUpdate: null,
      objectToUpdate: null
    };
    this.putDataToDB = this.putDataToDB.bind(this);
    this.updateDB = this.updateDB.bind(this);
    this.deleteFromDB = this.deleteFromDB.bind(this);
  }

  componentDidMount() {
    this.getDataFromDb();
    if (!this.state.intervalIsSet) {
      let interval = setInterval(this.getDataFromDb, 1000);
      this.setState({ intervalIsSet: interval });
    }
  }

  componentWillUnmount() {
    if (this.state.intervalIsSet) {
      clearInterval(this.state.intervalIsSet);
      this.setState({ intervalIsSet: null });
    }
  }

  getDataFromDb = () => {
    fetch("/api/getData")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };

  putDataToDB = message => {
    let currentIds = this.state.data.map(data => data.id);
    let idToBeAdded = 0;
    while (currentIds.includes(idToBeAdded)) {
      ++idToBeAdded;
    }

    axios.post("/api/putData", {
      id: idToBeAdded,
      message: message,
      num: 0
    });
  };

  deleteFromDB = idTodelete => {
    let objIdToDelete = null;
    this.state.data.forEach(data => {
      if (data.id == idTodelete) {
        objIdToDelete = data.id;
      }
    });

    axios.delete("/api/deleteData", {
      data: {
        id: objIdToDelete
      }
    });
  };

  updateDB = (idToUpdate, updateToApply) => {
    let objIdToUpdate = null;
    this.state.data.forEach(data => {
      if (data.id == idToUpdate) {
        objIdToUpdate = data.id;
      }
    });

    axios.post("/api/updateData", {
      id: objIdToUpdate,
      update: { num: +updateToApply }
    });
  };

  render() {
    let { data } = this.state;
    return (
      <div>
        <Input
          onUpDateDB={this.updateDB}
          outputData={data}
          search={this.state.search}
          onOutPutDelete={this.deleteFromDB}
          onPutDataToDB={this.putDataToDB}
        />
      </div>
    );
  }
}

export default App;
