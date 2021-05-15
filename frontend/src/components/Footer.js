import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <footer>
      <Box>
        <h1 style={{ color: "blue", textAlign: "center", marginTop: "-50px" }}>
          The Solveware Co. Solving business problems with versatile solutions.
          DevOps Culture | A3 | Grants | Consultancy | Developer First
        </h1>

        <Container>
          <Row>
            <Col className="text-center py-3">
              Copyright &copy; The Solveware Co.
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Column>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </Column>
            <Column>
              <Heading>Services</Heading>
              <FooterLink href="#">Artificial Intelligence</FooterLink>
              <FooterLink href="#">Automation</FooterLink>
              <FooterLink href="#">Blockchain</FooterLink>
              <FooterLink href="#">Cloud</FooterLink>
            </Column>
            <Column>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Singapore</FooterLink>
              <FooterLink href="#">Hougang</FooterLink>
              <FooterLink href="#">Choa Chu Kang</FooterLink>
              <FooterLink href="#">Tampines</FooterLink>
            </Column>
            <Column>
              <Heading>Social Media</Heading>
              <FooterLink href="#">
                <i className="fab fa-facebook-f">
                  <span style={{ marginLeft: "10px" }}>Facebook</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-instagram">
                  <span style={{ marginLeft: "10px" }}>Instagram</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-twitter">
                  <span style={{ marginLeft: "10px" }}>Twitter</span>
                </i>
              </FooterLink>
              <FooterLink href="#">
                <i className="fab fa-youtube">
                  <span style={{ marginLeft: "10px" }}>Youtube</span>
                </i>
              </FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </footer>
  );
};
export default Footer;
