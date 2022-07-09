import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'

import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <h1 className="title">Note Zipper</h1>
            <p className="subtitle">One safe place for all your notes!</p>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingButton">
                  Login
                </Button>
              </a>
              <a href="/register">
                <Button size="lg" className="landingButton" variant="outline-primary">
                  Sign Up
                </Button>
              </a>
            </div>
         </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage