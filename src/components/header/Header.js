import React, { Component } from "react";
//import { Container, Row, Col, /*Breadcrumb, BreadcrumbItem*/ } from "reactstrap";
import MainMenu from "./MainMenu";

import {Link} from 'react-router-dom'
import './Header.css';

class Header extends Component {

    render(){
        return(
            <div id="mainMenu" className="d-flex justify-content-between align-self-end leftHeader">
                <div className="p-2 leftHeader">
                    <div className="d-flex">
                        <Link to='/'>
                            <img id="banner_logo" src="../images/banner_logo.png" alt="#"/></Link>
                            <h1><i>PR 102</i><small> Fundamentals of</small><br/><i>Personnel Recovery</i></h1>
                        
                    </div>
                </div>
                <div className="p-2 middleHeader"></div>
                <div className="rightHeader"><MainMenu/></div>
                {/*<Container>
                    <Row>
                        <Col className="leftHeader" md="4" >
                            
                        </Col>
                        <Col className="middleHeader" md="2" >d</Col>
                        <Col className="rightHeader" md="6" >
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col md="12">
                            <Breadcrumb tag="nav">
                                <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
                                <BreadcrumbItem tag="a" href="#">Introduction to PR</BreadcrumbItem>
                                <BreadcrumbItem active tag="span">FrameName</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>*/}
            </div>
        );
    }
}
export default Header;