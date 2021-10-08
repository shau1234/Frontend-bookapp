import React, { useState } from "react";
import {
  Typography,
  TextField,
  InputLabel,
  FormControl,
  Select,
  Grid,
  Paper,
  Button,
} from "@material-ui/core";

import axios from "axios";

const Register = (props) => {
  const [user, setUser] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    password: "",
    role:""
    
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("handleFormSubmit called");

    const usr = {
      customerId: 0,
      fullName: user.fullName,
      mobileNumber: user.mobileNumber,
      user: {
        email: user.email,
        password: user.password,
        role:user.role,
        userId:0
      },
      
    };
    axios.post("http://localhost:8082/customers", usr).then((res) => {
      console.log(res);
      props.history.push("/login");
    });
  };
  const handleChange = (event) => {
    //console.log(event.target.name); // returns field name
    //console.log(event.target.value); // return value entered by users
    const usr = { ...user };
    usr[event.target.name] = event.target.value;
    setUser(usr);
  };

  return (
    <div>
      <Grid
        item
        md={6}
        style={{
          marginTop: "10px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography variant="h4" style={{ marginTop: "30px" }}>
          Register Form
        </Typography>
        <Paper elevation={3} style={{ padding: "30px", marginTop: "10px" }}>
          <form onSubmit={handleFormSubmit}>
            <TextField
              id="outlined-basic"
              label="Fullname"
              placeholder="Enter your full name"
              variant="outlined"
              name="fullName"
              value={user.fullName}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="outlined-mobile"
              label="Mobile No"
              placeholder="Enter mobile number"
              variant="outlined"
              name="mobileNumber"
              value={user.mobileNumber}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="outlined-email"
              label="Email"
              placeholder="Enter email"
              variant="outlined"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            
            <TextField
              id="outlined-password"
              label="Password"
              placeholder="Enter password"
              variant="outlined"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              fullWidth
              style={{ marginBottom: 10 }}
            />
            <FormControl
              variant="filled"
              fullWidth
              style={{ marginBottom: 10 }}
            >
              <InputLabel forhtml="filled-age-native-simple">Role</InputLabel>
              <Select
                native
                value={user.role}
                name="role"
                onChange={handleChange}
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
            
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Register
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
};

export default Register;