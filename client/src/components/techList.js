import React, { Component } from "react";

class TechList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.outPutData.sort(function(a, b) {
      var textA = a.message.toUpperCase();
      var textB = b.message.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    return (
      <ul className=" item list-group-item ">
        {this.props.outPutData.length <= 0
          ? "NO TECHNOLOGIES YET"
          : this.props.outPutData
              .filter(item =>
                this.props.isFiltering
                  ? item.message
                      .toLowerCase()
                      .startsWith(this.props.filterText.toLowerCase())
                  : true
              )

              .map(data => (
                <li
                  className="  list-group-item  p-lg-5 row"
                  key={data.message}
                >
                  {data.message}
                  <div className="tech-contanier">
                    <button
                      className="buttons btn btn-warning btn-sm  col-xs-4"
                      onClick={() => {
                        this.props.onUpDateDB(data.id, data.num + 1);
                      }}
                    >
                      +
                    </button>

                    <button
                      className=" buttons btn btn-warning btn-sm col-xs-4"
                      onClick={() => {
                        if (data.num != 0) {
                          this.props.onUpDateDB(data.id, data.num - 1);
                        }
                      }}
                    >
                      -
                    </button>

                    {data.num}

                    <button
                      onClick={() => this.props.onOutPutDelete(data.id)}
                      className=" delete buttons btn btn-danger btn-sm  col-xs-4 "
                    >
                      DELETE
                    </button>
                  </div>
                </li>
              ))}
      </ul>
    );
  }
}

export default TechList;
