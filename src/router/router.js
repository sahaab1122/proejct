import React from "react";
import { Route } from "react-router-dom";
import Home from "../components/Home";
import Shop from '../components/Shop';
import Shop2 from '../components/Shop2';
import SignUp from '../components/SignUp';
import LogIn from '../components/LogIn';
import checkout from "../components/checkout";

import Inputfieldbody from '../components/Inputfieldbody'

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>

        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Shop" component={Shop} />
        <Route exact path="/Shop2" component={Shop2} />
        <Route exact path="/checkout" component={checkout} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/LogIn" component={LogIn} />

        <Route exact path="/Inputfieldbody" component={Inputfieldbody} />

      </React.Fragment>
    );
  }
}
export default ReactRouter;
