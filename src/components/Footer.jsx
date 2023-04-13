import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import "./css/footer.css"

const Footer = () => {
  return (
    <footer className="mt-5 d-flex align-items-end justify-content-center w-100 position-absolute bottom-0" style={{backgroundColor:"black"}}>
      <Container>
        <Row>
          <Col md={6}>
            <p  style={{color:"white" }} className='mt-2'>Ali Osman Uçar</p>
          </Col>
          <Col md={6}>
            <div className="d-flex justify-content-end mt-2">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="mr-3"><FaGithub /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="mr-3"><FaLinkedin /></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className='mr-3'><FaTwitter /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;