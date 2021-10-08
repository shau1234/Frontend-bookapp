import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";
import  Joi  from "joi-browser";

class AddUser extends React.Component {
  state = {
    user: {
      
      email: "",
      password: "",
      role: "",
    },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
      .required(),
    password: Joi.string().min(3).max(8).required(),
    role: Joi.string().required(),
  };
  handleChange = (event) => {
    // event.target.name - name of field
    // event.target.value - value entered by the user
    //this.setState({ [event.target.name]: event.target.value }); userId,id
    const user = { ...this.state.user };
    //post["userId"] = 1001;
    //post["id"] = 200;
    //post["title"] = "Post 200";
    //post.body = "Post 200 body";
    console.log(user);
    //post[userId] = 100
    //post[]
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
    this.setState({ user });
  };

  // form validation method
  validate = () => {
    const errors = {};
    // Validate account details with schema
    const result = Joi.validate(this.state.user, this.schema, 
      {abortEarly: false, }
   );
    console.log(result);

    // Initialize error object with errors, if validate method returns errors
    if (result.error !== null) {
      for (let err of result.error.details) {
        errors[err.path[0]] = err.message;
      }
    }
    console.log(errors);
    // return null if no errors otherwise return errors
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    // const post = {
    //   userId: this.state.userId,
    //   id: this.state.id,
    //   title: this.state.title,
    //   body: this.state.body,
    // };
    const errors = this.validate(); // null / errors
    // Set state error object with errors or empty object based on
    // errors return by the validate() method
    this.setState({ errors: errors || {} });
    // if errors exists in the form , return to the login page
    console.log(errors);

    if (errors) return;
    axios
      .post("http://localhost:8082/users", this.state.user)
      .then((res) => {
        console.log(res.data);
        alert("Added User successfully!!");
        this.props.history.push("/users");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: error.res.data.message });
      });
  };
  render() {
    return (
      <div>
        <Typography variant="h3">Add User</Typography>
        {this.state.errMsg && (
          <div className="alert alert-danger" role="alert">
            {this.state.errMsg}
          </div>
        )}
        <form
          style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px",
          }}
          onSubmit={this.handleSubmit}
        >
          <Paper elevation={3} style={{ padding: "15px" }}>
            
            <TextField
              id="filled-basic"
              label="Email"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.email}
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Password"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.password}
              </p>
            )}
            <div className="mb-3">
          <label forhtml="role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="role"
            onChange={this.handleChange}
          >
            <option selected>Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.body}
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              fullWidth
            >
              Submit
            </Button>
          </Paper>
        </form>
      </div>
    );
  }
}

export default AddUser;