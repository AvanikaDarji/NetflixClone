import React, { Component } from "react";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentDetails: [
        { name: "Dinesh kumar", dob: "08/07/1999" },
        { name: "Alex", dob: "10/14/1996" },
        { name: "Cecilia", dob: "04/08/1995" },
        { name: "Deborah", dob: "08/06/1998" },
        { name: "Janica", dob: "12/31/1898" },
        { name: "Jimmy Shergil", dob: "06/07/1998" },
        { name: "Peter Parker", dob: "12/02/1998" },
        { name: "Ralph White", dob: "01/25/1996" },
        { name: "Veronica Mize", dob: "03/03/1995" },
        { name: "Shroyer", dob: "10/20/1997" },
        { name: "Oisson Decker", dob: "06/03/1994" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    if (data === "Age") {
      this.sortAge();
    } else if (data === "Name") {
      this.sortName();
    }
  }
  sortName = () => {
    const compare = (a, b) => {
      const bandA = a.name.toUpperCase();
      const bandB = b.name.toUpperCase();
      let comparison = 1;

      if (bandA > bandB) {
        comparison = 1;
      } else if (bandA < bandB) {
        comparison = -1;
      }
      return comparison;
    };

    this.setState({ studentDetails: this.state.studentDetails.sort(compare) });
  };
  sortAge = () => {
    const sorted = this.state.studentDetails.sort((a, b) => {
      const aDate = new Date(a.dob);
      const bDate = new Date(b.dob);
      return aDate.getTime() - bDate.getTime();
    });
    this.setState({
      studentDetails: sorted
    });
  };

  render() {
    return (
      <div>
        <LabelComponent title="To sort the data Pleaase note the below details. By default table is sorted by Name." />{" "}
        <br />
        <br />
        <LabelComponent title="Click on the Name to sort record by Name" />{" "}
        <br />
        <LabelComponent title="Click on the Date of birth to sort record by Age" />
        <br />
        <TabelComponent
          handleChange={this.handleChange}
          personsData={this.state.studentDetails}
        />
      </div>
    );
  }
}
class LabelComponent extends Component {
  render() {
    return (
      <div>
        <label> {this.props.title} </label>
      </div>
    );
  }
}
class TabelComponent extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th onClick={() => this.props.handleChange("Name")}>Name: </th>
            <th onClick={() => this.props.handleChange("Age")}>Age:</th>
          </tr>
        </thead>
        <tbody>
          {this.props.personsData.map((person, index) => (
            <tr key={index}>
              <td> {person.name ? person.name : ""}</td>
              <td>{person.dob} </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
