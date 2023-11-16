import { Routes, Route, Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Row, Col, Container, Navbar, Nav} from "react-bootstrap";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>My React App</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Welcome to My React App!</h2>
        </Col>
      </Row>
    </Container>
  );
}

function About() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">About</h2>
          <p>Lorem ipsum dolor sit amet. Aut consequatur impedit aut suscipit doloremque At maiores ullam! Ut veniam aperiam est quos repudiandae et enim harum. Qui sint consectetur aut explicabo praesentium ex sequi molestias est deserunt voluptatem et doloribus dolor ab unde ratione et atque internos.</p>
          <p>Id facilis adipisci ut praesentium corporis et corporis sint. Est velit error non culpa sunt eum rerum obcaecati est voluptates saepe et laboriosam nobis. Id doloremque dolorum ea Quis aliquid eos doloribus voluptas aut dolore nobis 33 molestias provident vel sunt laborum.</p>
          <p>Ut corporis obcaecati qui temporibus sunt qui omnis repellat. Qui autem eaque qui voluptatum eveniet a fugit porro et deleniti voluptatem eum aliquam totam sed tempore velit. Qui impedit provident ut unde accusantium in nulla quos ut fugit aperiam et dolore cupiditate! Et mollitia perferendis et atque rerum eos officiis asperiores aut nemo dolore.</p>
        </Col>
      </Row>
    </Container>
  );
}

function Contact() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Contact Us</h2>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Type your message here..." />
            </Form.Group>
            <br></br>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

function NoMatch() {
  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">Not Found</h2>
          <p className="text-center">Sorry, but the route you are trying to access does not exist.</p>
        </Col>
      </Row>
    </Container>
  );
}
