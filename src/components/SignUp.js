import React from 'react'
import logo from "../assets/logo1.png";
import './new.css'

class SignUp extends React.Component {
    state = {
        FirstName: '',
        LastName: '',
        Email: '',
        Address: "",
        Password: "",
        ConfirmPassword: "",

    }
    render() {

        return (
            <div className="login">
                <div className="login-navbar">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="col-sm-6 img-div">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                    </nav>
                </div>
                <div class="global-container">
                    <div class="card login-form" style={{ minWidth: '320px', width: '40vw' }}>
                        <div class="card-body">
                            <h3 class="card-title text-center">Sign Up </h3>
                            <div class="card-text">

                                {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
                                <form >
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="firstname">First Name</label>
                                            <input value={this.state.FirstName} onChange={(e) => this.setState({ FirstName: e.target.value })} on type="text" class="form-control form-control-sm" id="firstname" aria-describedby="emailHelp" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="lastname">Last Name</label>
                                            <input value={this.state.LastName} onChange={(e) => this.setState({ LastName: e.target.value })} type="text" class="form-control form-control-sm" id="lastname" aria-describedby="emailHelp" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="email">Email</label>
                                            <input value={this.state.Email} onChange={(e) => this.setState({ Email: e.target.value })} type="email" class="form-control form-control-sm" id="email" aria-describedby="emailHelp" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="Address">Address</label>
                                            <input value={this.state.Address} onChange={(e) => this.setState({ Address: e.target.value })} type="text" class="form-control form-control-sm" id="Address" aria-describedby="emailHelp" required />
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div class="form-group col-md-6">
                                            <label for="Password">Password </label>
                                            <input value={this.state.Password} onChange={(e) => this.setState({ Password: e.target.value })} type="password" class="form-control form-control-sm" id="Password" aria-describedby="emailHelp" required />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="confirmpassword">Confirm Password</label>
                                            <input value={this.state.ConfirmPassword} onChange={(e) => this.setState({ ConfirmPassword: e.target.value })} type="password" class="form-control form-control-sm" id="confirmpassword" aria-describedby="emailHelp" required />
                                        </div>
                                    </div>
                                    {/* <div class="form-group">
                                        <label for="exampleInputPassword1">Password</label>
                                       
                                        <input type="password" class="form-control form-control-sm" id="exampleInputPassword1" />
                                    </div> */}
                                    <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
                                    <div class="sign-up">
                                        have an account? <a href="/LogIn" className="link">Sign In</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default SignUp