import React, { Component } from "react";
import { TextField, Button, Paper, Typography,InputLabel,  FormControl,
    Select,Box } from "@material-ui/core";
import axios from "axios";
import  Joi  from "joi-browser";

class UserLogin extends React.Component {
  state = {
    user: {
      email: "",
      password: "",
      role:""
    },
    errors: {},
    errMsg: "",
  };

  // schema to validate
  schema = {
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }).required(),
    password: Joi.string().min(3).max(15).required(),
    role:Joi.string().min(3).max(30).alphanum().required(),
  };
  handleChange = (event) => {
    // event.target.name - name of field
    // event.target.value - value entered by the user
    //this.setState({ [event.target.name]: event.target.value }); userId,id
    const user = { ...this.state.user };
    console.log(user);
   
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
    const errors = this.validate(); 
    this.setState({ errors: errors || {} });
    // if errors exists in the form , return to the login page
    console.log(errors);
    if (errors) return;

    const user={
        "email": this.state.user.email,
        "password": this.state.user.password,
        "role": this.state.user.role

    }
    axios
      .post("http://localhost:8082/login", user)
      .then((res) => {
        console.log(res.data);
        alert("User Loggedin successfully!!");
        this.props.history.push("/books");
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ errMsg: error.res.data.message });
      });
  };
  render() {
    return (
      <div>
        <Typography variant="h3">Login</Typography>
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
            
            <FormControl
              variant="filled"
              fullWidth
              style={{ marginBottom: 10 }}
            >
              <InputLabel htmlFor="filled-age-native-simple">Role</InputLabel>
              <Select
                native
                value={this.state.role}
                name="role"
                onChange={this.handleChange}
                inputProps={{
                  name: "role",
                  id: "filled-age-native-simple",
                }}
              >
                <option aria-label="None" value="" />
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </Select>
            </FormControl>
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.role}
              </p>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
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