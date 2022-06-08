import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import Form from "@material-ui/core/FormGroup";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

import axios from "axios";
import { Base_url } from "../../requester";
import Swal from "sweetalert2";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    cpassword: "",
    error: "",
    isLoading: false,
    showPassword: false,
    role: "user",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    let { email, password, first_name, last_name } = this.state;
    try {
      this.setState({ isLoading: true });
      const res = await axios.post(`${Base_url}/auth/signup`, {
        first_name,
        last_name,
        email,
        password,
      });

      if (res.data.status == "Success") {
        await Swal.fire("Signup", res.data.message, "success");
        this.setState({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          isLoading: false,
        });
      }
    } catch (err) {
      if (err.response) {
        this.setState({ isLoading: false });

        const errors = err.response.data.errors;
        if (errors) {
          // errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
      }
      await Swal.fire("Signup", err.response.data.message, "warning");
    }
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  render() {
    const { isLoading } = this.state;
    if (
      this.props.AuthLoading === false &&
      this.props.isAuthenticated
    ) {
      if (this.props.user.role == "user") {
        return <Redirect to="/user" />;
      }
      if (this.props.user.role == "admin") {
        return <Redirect to="/dashboard" />;
      }
    }
    return (
      <div className="bg-sign-in container-fluid">
        <div className="row justify-content-center h-100vh">
          <div className="col-md-5 m-auto">
            <ScrollAnimation
              delay={500}
              animateIn="animate__slideInUp"
              animateOnce={true}
            >
              <div className="shade zoom-in row bg-white br-15 p-md-5 p-3">
                <h2 className="font-weight-bold pl-5">Sign Up</h2>
                <h5 class="grey pl-5">
                  We just need your basics to get started
                </h5>
                <form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <FormControl className="col-10 mx-auto" variant="outlined">
                      <div className="d-flex">
                        <TextField
                          autoComplete="off"
                          onChange={(e) =>
                            this.setState({ first_name: e.target.value })
                          }
                          value={this.state.first_name}
                          className="my-md-2 my-2 mr-2"
                          id="outlined-basic"
                          label="First Name"
                          variant="outlined"
                          name="first_name"
                        />
                        <TextField
                          autoComplete="off"
                          className="my-md-2 my-2"
                          id="outlined-basic"
                          value={this.state.last_name}
                          onChange={(e) =>
                            this.setState({ last_name: e.target.value })
                          }
                          name="last_name"
                          label="Last Name"
                          variant="outlined"
                        />
                      </div>
                    </FormControl>
                    <FormControl className="col-10 mx-auto" variant="outlined">
                      <TextField
                        autoComplete="off"
                        className="my-md-4 my-2"
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        value={this.state.email}
                        onChange={(e) =>
                          this.setState({ email: e.target.value })
                        }
                        name="email"
                        variant="outlined"
                      />
                    </FormControl>
                    <FormControl
                      className="col-10 mx-auto my-md-4 my-2"
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        autoComplete="off"
                        id="outlined-adornment-password"
                        type={this.state.showPassword ? "text" : "password"}
                        value={this.state.password}
                        onChange={(e) =>
                          this.setState({ password: e.target.value })
                        }
                        name="password"
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                              edge="end"
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        labelWidth={70}
                      />
                    </FormControl>
                    <div className="col-10 mx-auto px-0">
                      <div
                        class="btn-group d-flex align-items-center"
                        role="group"
                        aria-label="Basic checkbox toggle button group"
                      >
                        <input
                          type="checkbox"
                          class="regular-checkbox big-checkbox mb-2 mr-2"
                          id="btncheck1"
                          height="15px"
                          autocomplete="off"
                        />
                        <label class="grey small mb-1" for="btncheck1"></label>
                        <span className="small grey pl-2">
                          I read and agree to Terms and Conditions
                        </span>
                      </div>
                    </div>
                    <div className="col-10 my-2 mx-auto px-0">
                      <button
                        type="submit"
                        className="btn-block rounded btn-success border-0 py-2 text-center"
                      >
                        {isLoading && (
                          <i className="mr-1 fa fa-refresh fa-spin"></i>
                        )}{" "}
                        Sign up
                      </button>
                    </div>
                    <div className="col-10 text-center my-2">
                      <small className="grey">Already have an account?</small>
                      <Link to="sign-in">
                        <button className="border-0 bg-white text-success text-center">
                          Sign in
                        </button>
                      </Link>
                    </div>
                  </FormGroup>
                </form>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
  AuthLoading: state.auth.loading,
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Signup);
