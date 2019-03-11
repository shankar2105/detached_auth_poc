import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Row, Col, Button } from 'antd';
// import routes from "../constants/routes.json";
import styles from './Home.css';

interface Props {}
export class Home extends Component<{}, {}> {
    props: Props;

    render() {
        return (
            <div className={styles.container} data-tid="container">
                <h4>Log in to SAFE</h4>
                <h6>safe-auth://home/#/login</h6>
                <Col>
                    <Row>
                        <Input placeholder="secret" />
                    </Row>
                    <Row>
                        <Input placeholder="password" />
                    </Row>
                    <Row>
                        <Button>Log innn</Button>
                    </Row>
                </Col>
            </div>
        );
    }
}
