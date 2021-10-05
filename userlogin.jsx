import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";
import  Joi  from "joi-browser";

class UserLogin extends React.Component {
  state = {
    user: {
      userId: "",
      email: "",
      password: "",
      role: "",
    },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
    userId: Joi.number().min(1000).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
    password: Joi.string().min(3).max(8).required(),
    role: Joi.string().min(10).alphanum().required(),
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
    /*axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state.user)
      .then((res) => {
        console.log(res.data);
        alert("User Loggedin successfully!!");
        this.props.history.push("/posts");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errMsg: error.res.data.message });
      });*/
  };
  render() {
    return (
      <div>
        <Typography variant="h3">User Login</Typography>
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
              label="User Id"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="userId"
              value={this.state.userId}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.userId}
              </p>
            )}
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
            <TextField
              id="filled-basic"
              label="Role"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="role"
              value={this.state.role}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.role}
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

export default UserLogin;