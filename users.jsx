import React, { Component } from 'react';
import axios from "axios";

//import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    
    Container,
   
} from '@material-ui/core';


class Users extends React.Component {
    
    state = {
        users:[],
    }
    componentDidMount() {
        axios.get("http://localhost:8082/users")
            .then((response) => {
                console.log(response.data);
                this.setState({ users: response.data })})
            .catch((error) => console.log(error));
    }
    

    render() { 
        return (<div>
            <Container>
          
          <TableContainer
            component={Paper}
            elevation={3}
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
            }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  
                  <TableCell >UserId</TableCell>
                  <TableCell >Email</TableCell>
                  <TableCell >Password</TableCell>
                 
                  <TableCell >Role</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map((user) => (
                  <TableRow key={user.userId}>
                    <TableCell component="th" scope="row">
                      {user.userId}
                    </TableCell>
                    
                    <TableCell >{user.email}</TableCell>
                    <TableCell >{user.password}</TableCell>
                    <TableCell >{user.role}</TableCell>
                    
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>

        </div>);
    }
}
 
export default Users;
