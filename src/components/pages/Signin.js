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
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Swal from "sweetalert2";

class Signin extends Component {
  state = {
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
    error: "",
    isLoading: false,
    showPassword: false,
    role: "user",
  };
  async componentDidUpdate(prevProps, prevState) {
    if (this.props.auth.error !== prevProps.auth.error) {
      const { auth } = this.props;
      this.setState({ isLoading: false });
      await Swal.fire("Login", auth.error.message, "warning");
    }
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { login } = this.props;
    const { email, password } = this.state;
    this.setState({ isLoading: true });
    await login(email, password);
    //  this.setState({ isLoading: false });
  };

  handleChange = (prop) => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  render() {
    const { isLoading } = this.state;
    if (this.props.AuthLoading === false && this.props.isAuthenticated) {
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
                <h2 className="font-weight-bold pl-5">Sign In</h2>
                <form onSubmit={this.onSubmit}>
                  <FormGroup row>
                    <FormControl className="col-10 mx-auto" variant="outlined">
                      <TextField
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
                        <span className="small grey pl-2">Remember me</span>
                        <small className="text-success ml-auto">
                          Forgot Password?
                        </small>
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
                        Sign In
                      </button>
                    </div>
                    <div className="col-10 text-center my-2">
                      <small className="grey">Don't have an account?</small>
                      <Link to="sign-up">
                        <button className="border-0 bg-white text-success text-center">
                          Sign up
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
export default connect(mapStateToProps, {
  login,
})(Signin);
