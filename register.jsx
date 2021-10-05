import React, { Component } from 'react';


//cc
class Register extends React.Component {
    
    state = {
        customer:[]
    }
    /*componentDidMount() {
        axios.get("http://localhost:8082/swagger-ui/#/customer-controller").then((response)=>this.setState({scustomer:response.data}));
        
      }*/
    render() {
        return (
            <div>
                <div className="p-3 mx-auto w-50 bg-success text-white">
            <h1>Customer Reg Page</h1>
                    <form>
                    <div className="mb-3">
                    <label className="form-label">CustomerId:</label><br></br>
                    <input className="form-control" type="text" placeholder="Enter CustomerId" />
                        </div>

                        <div className="mb-3">
                    <label className="form-label">FullName</label><br></br>
                <input className="form-control" type="text" placeholder="Enter fullName"/>
                    </div>
                        
                <div className="mb-3">
                    <label className="form-label">MobileNo:</label><br></br>
                    <input className="form-control" type="tel" placeholder="Enter mobileNumber" />
                </div>
                <div className="mb-3">
                    <label className="form-label">RegisterOn:</label><br></br>
                    <input className="form-control" type="text" placeholder="Enter date of registration" />
                        </div>
                    <div className="mb-3">
                    <label className="form-label">Email:</label><br></br>
                    <input className="form-control" type="password" placeholder="Enter email" />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Password:</label><br></br>
                    <input className="form-control" type="password" placeholder="Enter password" />
                    </div>
                    <div className="mb-3">
                    <label className="form-label">Role:</label><br></br>
                    <input className="form-control" type="text" placeholder="Enter role" />
                </div>
                    <div className="mb-3">
                    <label className="form-label">Address(Street):</label><br></br>
                    <input className="form-control" type="text" placeholder="Enter address" />
                </div>
                
                <div className="mb-3">
                    <label className="form-label">city:</label><br></br>
                <input className="form-control"  type="text" placeholder="Enter the city" />
        </div>
        <div className="mb-3">
                    <label className="form-label">Country:</label><br></br>
                <input className="form-control"  type="text" placeholder="Enter the country" />
        </div>
        <div className="mb-3">
                    <label className="form-label">Pincode:</label><br></br>
                <input className="form-control"  type="text" placeholder="Enter the pincode" />
        </div>

                        <button type="submit" className="btn btn-primary">
            Submit
          </button>
                </form>
                </div>
                </div>
        )
    }
}
 
export default Register;