import { Nav } from 'react-bootstrap';

const TabNav = () => (
  <Nav fill variant="pills" justify id="dashboard-nav" className="mt-auto">
    <Nav.Item>
      <Nav.Link eventKey="add" className="h-100">
        <i className="bi bi-plus-circle-fill fs-4 mb-1" />
        Add measure.
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="detail" className="h-100">
        <i className="bi bi-graph-up fs-4 mb-1" />
        Track.it
      </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link eventKey="progress" className="h-100">
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