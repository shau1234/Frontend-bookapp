import React, { Component } from "react";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";

class UpdateUser extends React.Component {
  state = {
    user: {
     
        email: "",
        password: "",
        role: "",
      },
      errors: {},
      errMsg: "",
  };
  componentDidMount(){
    console.log(this.props.match.params.userId);
    axios
    .get(`http://localhost:8082/users/${this.props.match.params.userId}`
    )
    .then((res) =>{
        console.log(res.data);
        this.setState({user : res.data });
    })
    .catch((error) => console.log(error));
}

  handleChange = (event) => {
    const user = { ...this.state.user };
    user[event.target.name] = event.target.value;
    this.setState({ user: user });
    this.setState({ user });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8082/users/${this.props.match.params.userId}`,
        this.state.user
        )
        
      .then((res) => {
        console.log(res.data);
        alert("Updated User successfully!!");
        this.props.history.push("/users");
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  };

  render() {
    return (
      <div>
        <Typography variant="h3">Update User</Typography>

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
              value={this.state.user.email}
              onChange={this.handleChange}
            />
            <TextField
              id="filled-basic"
              label="Password"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="password"
              value={this.state.user.password}
              onChange={this.handleChange}
            />
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

export default UpdateUser;