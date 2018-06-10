import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
                  <h1 style={{
                    marginTop: 200,
                    color: 'white',
                    fontWeight: 600,
                    fontSize: 60,
                    textAlign: 'center'
                  }}>I craft beautiful products <br />
                    & memorable experiences</h1>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <div style={{ backgroundColor: 'white', paddingTop: 48, paddingBottom: 48 }}>
          <Grid>
            <Row>
              <Col lg={6}>
                <div style={{
                  backgroundColor: '#ffbcb8',
                  padding: 24
                }}>
                  <h2 style={{
                    color: '#f44336',
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: '8px'
                  }}>Verizon</h2>
                  <p style={{ fontSize: 18 }}>Creating tools for the cloud</p>

                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='/images/hah-preview.png' style={{
                      position: 'relative',
                      height: 350,
                      top: 24
                    }} />
                  </div>
                </div>
              </Col>

              <Col lg={6}>
                <div style={{
                  backgroundColor: '#B4E8D4',
                  padding: 24
                }}>
                  <h2 style={{
                    color: '#009688',
                    fontWeight: 600,
                    fontSize: 30,
                    lineHeight: '8px'
                  }}>Health at Hand</h2>
                  <p style={{ fontSize: 18 }}>Disrupting healthcare in the Middle East</p>

                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src='/images/hah-preview.png' style={{
                      position: 'relative',
                      height: 350,
                      top: 24
                    }} />
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}

export default Example;