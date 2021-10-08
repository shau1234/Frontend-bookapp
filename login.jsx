import React, { useState } from "react";
import Joi from "joi-browser";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../Actions/loginActions";

// sfc - functional component
// cc - class component
// ccc - class component with contructor

const Login = (props) => {
  //const [counter, setCounter] = useState(0);

  // initial state of login component
  const [login, setLogin] = useState({ email: "", password: "", role: "" });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const usr = useSelector((state) => state.login);
  // schema to validate
  const schema = {
    //empId: Joi.number().min(1000).required(),
    //firstName: Joi.string().min(3).max(30).alphanum().required(),
    //lastName: Joi.string().min(1).alphanum().required(),
    //contactNo: Joi.number().min(9000000000).max(9999999999).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com"] } })
      .required(),
    password: Joi.string().min(3).max(8).required(),
    role: Joi.string().required(),
  };
  console.log(login);

  // form validation method to validate user entered data
  const validate = () => {
    const errors = {}; //email:"Invalid email address" , password: "Expecting 3 chars"

    // Validate login details w.r.t schema
    const result = Joi.validate(login, schema, {
      abortEarly: false,
    });

    console.log(result.error);

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

  const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // Prevents default behaviour of submit button
    event.preventDefault();
    console.log(handleSubmit);
    const errors = validate(); // null / errors
    // Set state error object with errors or empty object based on
    // errors return by the validate() method
    console.log(errors);
    errors ? setErrors(errors) : setErrors({});
    // if errors exists in the form , return to the login page
    console.log(errors);

    if (errors) return;
    dispatch(loginAction(login));

    if (usr.loggedIn) {
      setTimeout(() => {
        props.history.push("/books");
      }, 100);
    }
     axios
       .post("http://localhost:8082/login", login)
       .then((res) => console.log(res.data))
      .catch((error) => {
         const msg = error.request.response;
         console.log(msg);
       });
  };

  return (
    <div>
      <p className="fs-2">Login Form</p>

      {usr.errMsg && (
        <div className="alert alert-danger w-50 mx-auto" role="alert">
          {usr.errMsg}
        </div>
      )}
      <form
        className="w-50 mx-auto border p-3 mt-3 text-start shadow p-3 mb-5 bg-body rounded"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label forHtml="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={login.email}
            name="email"
            onChange={handleChange}
          />
          {errors && <p>{errors.email}</p>}
        </div>

        <div className="mb-0">
          <label forHtml="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={login.password}
            name="password"
            onChange={handleChange}
          />
          {errors && <p>{errors.password} </p>}
        </div>
        <div className="mb-3">
          <label forhtml="role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="role"
            onChange={handleChange}
          >
            <option selected>Select Role</option>
            <option value="Customer">Customer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        {errors && <p>{errors.role} </p>}
        <div class="d-grid">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;