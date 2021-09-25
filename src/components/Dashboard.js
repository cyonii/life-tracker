import { Tab } from 'react-bootstrap';
import TabNav from './TabNav';
import TabContent from './TabContent';

export default function Dashboard() {
  return (
    <div id="dashboard" className="d-flex flex-column vh-100">
      <Tab.Container id="dashboard-tabs" defaultActiveKey="add">
        <TabContent />
        <TabNav />
      </Tab.Container>
    </div>
  );
}
