import { Nav } from 'react-bootstrap';

const TabNav = () => (
  <Nav fill variant="pills" justify id="dashboard-nav" className="mt-auto">
    <Nav.Item>
      <Nav.Link eventKey="add-record" className="h-100">
        <i className="bi bi-plus-circle-fill fs-4 mb-1" />
        Add record.
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="records" className="h-100">
        <i className="bi bi-graph-up fs-4 mb-1" />
        Track.it
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="progress-report" className="h-100">
        <i className="bi bi-pie-chart-fill fs-4 mb-1" />
        Your progress
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="more" className="h-100">
        <i className="bi bi-three-dots fs-4 mb-1" />
        More
      </Nav.Link>
    </Nav.Item>
  </Nav>
);

export default TabNav;
