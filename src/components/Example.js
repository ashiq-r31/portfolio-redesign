import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Project from './Project'

const Example = () => {
  return (
    <div>
      <Grid fluid>
        <Row>
          <Col lg={12}>
            <div style={{
              backgroundImage: `url(/images/bg.jpeg)`,
              backgroundColor: 'rgb(204, 14, 1)',
              backgroundSize: 'cover',
              backgroundBlendMode: 'overlay',
              height: '80vh',
              marginTop: 16,
              padding: 24
            }}>
              <Row>
                <Col lgOffset={9} lg={1}>
                  <li style={{ listStyle: 'none', color: 'white', fontWeight: 600 }}>Work</li>
                </Col>
                <Col lg={1}>
                  <li style={{ listStyle: 'none', color: 'white', fontWeight: 600 }}>Blog</li>
                </Col>
                <Col lg={1}>
                  <li style={{ listStyle: 'none', color: 'white', fontWeight: 600 }}>Contact</li>
                </Col>
              </Row>

              <Row>
                <Col lg={12}>
                  <div style={{
                    height: '75vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <h1 style={{
                      color: 'white',
                      fontWeight: 600,
                      fontSize: 72,
                      textAlign: 'center'
                    }}>I craft beautiful products <br />
                      & memorable experiences</h1>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div style={{ backgroundColor: 'white', paddingTop: 48, paddingBottom: 48 }}>
          <Grid>
            <Row>
              <Col lg={6}>
                <Project
                  theme='#D52B1E'
                  title='Verizon'
                  description='Building tools for the cloud platform'>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='/images/hah-preview.png' style={{
                      position: 'relative',
                      height: 350,
                      top: 24
                    }} />
                  </div>
                </Project>
              </Col>

              <Col lg={6}>
                <Project
                  theme='#61c9a1'
                  title='Health at hand'
                  description='Disrupting healthcare in the Middle East'>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='/images/hah-preview.png' style={{
                      position: 'relative',
                      height: 350,
                      top: 24
                    }} />
                  </div>
                </Project>
              </Col>
            </Row>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Example;