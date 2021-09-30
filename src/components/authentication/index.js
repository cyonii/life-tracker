import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AuthenticationForm from './Form';

export default function Authentication() {
  useEffect(() => {
    document.title = 'Authentication | Life Tracker';
  }, []);

  return (
    <Container>
      <Row className="justify-content-center align-items-center gy-5 gy-md-0 min-vh-100 py-5">
        <Col xs={12} md={6} lg={4} xl={3}>
          <p className="text-md-end text-muted mb-0">Welcome, human 👋</p>
          <h1 className="display-6 text-primary fw-bold">Life Tracker App</h1>
          <p className="fst-italic text-dark fw-light lh-1">See how you&apos;re doing everyday</p>
        </Col>

        <Col xs={12} md={6} lg={4} xl={3}>
          <AuthenticationForm />
        </Col>
      </Row>
    </Container>
  );
}
