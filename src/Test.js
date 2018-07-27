import React, { Component } from "react";

export class Test extends Component {
  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value }, () => {
      console.log(this.state);
    });
  };

  render() {
    return (
      <div>
        <label for="gender">Username </label>
        <input type="text" name="username" onChange={this.handleChange} />
        <br />
        <br />
        <label for="password">Password </label>
        <input type="password" name="password" onChange={this.handleChange} />
        <br />
        <br />
        <label for="gender">Gender </label>
        <input
          type="radio"
          name="gender"
          onChange={this.handleChange}
          value="Male"
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          onChange={this.handleChange}
          value="Female"
        />{" "}
        Female
        <br />
        <br />
        <label for="country">Country </label>
        <select name="country" onChange={this.handleChange}>
          <option value="" disabled selected>
            Select country
          </option>
          <option value="1">India</option>
          <option value="2">UK</option>
          <option value="3">US</option>
        </select>
      </div>
    );
  }
}
