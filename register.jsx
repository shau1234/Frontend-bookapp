import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Box, Button,Grid } from "@material-ui/core";
import { TextField, Button, Paper, Typography, Box } from "@material-ui/core";
import axios from "axios";
import  Joi  from "joi-browser";
//cc
class Register extends React.Component {
    
    state = {
        
        customer:{
            fullName:"",
            mobileNumber:"",
            email:"",
            password:""
        },
        errors: {},
    errMsg: ""
    }
    
      handleChange = (event) => {
        // event.target.name - name of field
        // event.target.value - value entered by the user
        //this.setState({ [event.target.name]: event.target.value }); userId,id
        const customer = { ...this.state.customer };
        //post["userId"] = 1001;
        //post["id"] = 200;
        //post["title"] = "Post 200";
        //post.body = "Post 200 body";
        console.log(customer);
        //post[userId] = 100
        //post[]
        customer[event.target.name] = event.target.value;
        this.setState({ customer: customer });
        this.setState({ customer });
      };
    
      // form validation method
     /* validate = () => {
        const errors = {};
        // Validate account details with schema
        const result = Joi.validate(this.state.customer, this.schema, 
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
      };*/
    
      handleSubmit = (event) => {
        event.preventDefault();
        console.log("handleSubmit");
        
        /*const errors = this.validate(); 
        this.setState({ errors: errors || {} });
        console.log(errors);
        if (errors) return;*/
        const customer={
            "customerId": 0,
            "fullName": this.state.customer.fullName,
            "mobileNumber": this.state.customer.mobileNumber,
            "user": {
                "email": this.state.customer.email,
                "password": this.state.customer.password,
                "userId": 0
             }
        }
        axios
          .post("http://localhost:8082/customers", customer)
          .then((res) => {
            console.log(res.data);
            alert("Registration successfull!!");
            this.props.history.push("/userlogin");
          })
          .catch((error) => {
            console.log(error);
            this.setState({ errMsg: error.res.data.message });
          });
      };
    render() {
        return (
            <div >
               <Typography variant="h3">Register</Typography>
        {this.state.errMsg && (
          <div className="alert alert-danger" role="alert">
            {this.state.errMsg}
          </div>
        )}
          
        <form style={{
            width: "50%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "30px"}}
            onSubmit={this.handleSubmit}>
                    

                    <Paper elevation={3} style={{ padding: "15px" }}>
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="fullName"
              value={this.state.fullName}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.fullName}
              </p>
            )}
            <TextField
              id="filled-basic"
              label="Mobile Number"
              variant="standard"
              fullWidth
              style={{ marginBottom: "10px" }}
              name="mobileNumber"
              value={this.state.mobileNumber}
              onChange={this.handleChange}
            />
            {this.state.errors && (
              <p className="text-danger font-monospace text-start">
                {this.state.errors.mobileNumber}
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
        )
    }
}
 
export default Register;

            