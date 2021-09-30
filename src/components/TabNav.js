import { Nav } from 'react-bootstrap';

const TabNav = () => {
  const navItem = (eventKey, text, iconClass) => (
    <Nav.Item>
      <Nav.Link eventKey={eventKey} className="h-100">
        <i className={`bi ${iconClass} fs-4 mb-1`} />
        {text}
      </Nav.Link>
    </Nav.Item>
  );

  return (
    <Nav fill variant="pills" justify id="dashboard-nav" className="mt-auto">
      {navItem('add-record', 'Add record.', 'bi-plus-circle-fill')}
      {navItem('records', 'Track.it', 'bi-graph-up')}
      {navItem('progress-report', 'Your progress', 'bi-pie-chart-fill')}
      {navItem('more', 'More', 'bi-three-dots')}
    </Nav>
  );
};

export default TabNav;
