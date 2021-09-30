import { Tab, Col } from 'react-bootstrap';
import TabNav from './TabNav';
import TabContent from './TabContent';

export default function Dashboard() {
  return (
    <div id="dashboard" className="vh-100 alert-dark">
      <Col xs={12} sm={10} md={8} lg={6} xl={5} className="d-flex flex-column h-100 bg-white mx-auto">
        <Tab.Container defaultActiveKey="add-record">
          <TabContent />
          <TabNav />
        </Tab.Container>
      </Col>
    </div>
  );
}
