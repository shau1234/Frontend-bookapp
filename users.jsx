import React, { Component } from 'react';
import axios from "axios";

import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
    Container,
   
} from '@material-ui/core';
import Button from "@material-ui/core/Button";

//import Container from "@material-ui/core/Container";
import DeleteIcon from "@material-ui/icons/Delete";
import UpdateIcon from "@material-ui/icons/Update";

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
            
          <Box
            style={{ float: "right", marginTop: "20px", marginBottom: "10px" }}
          >
            <Link to="/adduser">
            <Button variant="outlined" color="primary">
              Add User
            </Button>
            </Link>
          </Box>
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
                   <TableCell >Role</TableCell>
                   <TableCell >Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.users.map((user) => (
                  <TableRow key={user.userId}>
                    <TableCell component="th" scope="row">
                      {user.userId}
                    </TableCell>
                    
                    <TableCell >{user.email}</TableCell>
                    
                    <TableCell >{user.role}</TableCell>
                    <TableCell align="right">
                      <Box flexDirection="row">
                        <Button variant="contained" color="primary">
                          <UpdateIcon />
                        </Button>
                        <Button variant="contained" color="secondary">
                          <DeleteIcon />
                        </Button>
                      </Box>
                    </TableCell>
                    
                    
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
