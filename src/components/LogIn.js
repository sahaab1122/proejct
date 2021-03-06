import React from 'react'
import logo from "../assets/logo1.png";
import './new.css'

class LogIn extends React.Component {
    state = {
        email: '',
        password: "",
        checkbox: '',
    }
    render() {
        return (
            <div className="login" style={{backgroundColor:'rgb(155, 146, 146)'}}>
                <div className="login-navbar">
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="col-sm-6 img-div">
                            <img src={logo} className="logo" alt="logo" />
                        </div>
                    </nav>
                </div>
                <div class="global-container">
                    <div class="card login-form">
                        <div class="card-body">
                            <h3 class="card-title text-center">Log in </h3>
                            <div class="card-text">

                                {/* <div class="alert alert-danger alert-dismissible fade show" role="alert">Incorrect username or password.</div> */}
                                <form>
                                    <div class="form-group">
                                        <label for="Email">Email address</label>
                                        <input value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} type="email" class="form-control form-control-sm" id="Email" aria-describedby="emailHelp" required />
                                    </div>
                                    <div class="form-group">
                                        <label for="password">Password</label>
                                        <a href="#" style={{ float: "right", fontSize: "12px" }}>Forgot password?</a>
                                        <input value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} type="password" class="form-control form-control-sm" id="password" required />
                                    </div>
                                    <button type="submit" class="btn btn-primary btn-block">Sign in</button>

                                    <div class="sign-up">
                                        Don't have an account? <a className="link" href="/SignUp">Create One</a>
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
export default LogIn 