// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Row, Col, Button } from "antd";
import routes from "../constants/routes";
import styles from "./Home.css";
type Props = {};
export default class Home extends Component<{}, {}> {
  props: Props;
  handleSecret = e => {
    // console.log('e', e.target.value)
    this.setState({ secret: e.target.value });
  };
  handlePassword = e => {
    // console.log('e', e.target.value)
    this.setState({ password: e.target.value });
  };
  handleLogin = e => {
    const { loginToSafe } = this.props;
    // const { secret, password } = this.state;
    console.log("safe-auth://home/#/login");
    console.log(
      "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!loginToSafe JUST USING DEFUALT FOR NOWWWW",
      loginToSafe
    );
    // loginToSafe( { secret, password } );
    loginToSafe({
      secret: "safe-auth://home/#/login",
      password: "safe-auth://home/#/login"
    });
    // console.log('e', e.target.value)
    // this.setState({ password: e.target.value })
    // console.log('secret, password', secret, password);
  };
  render() {
    console.log("this.state", this.state);
    return (
      <div className={styles.container} data-tid="container">
        <h4>Log in to SAFE</h4>
        <h6>safe-auth://home/#/login</h6>
        <Col>
          <Row>
            <Input placeholder="secret" onChange={this.handleSecret} />
          </Row>
          <Row>
            <Input placeholder="password" onChange={this.handlePassword} />
          </Row>
          <Row>
            <Button onClick={this.handleLogin}>Log innn</Button>
          </Row>
        </Col>
      </div>
    );
  }
}
