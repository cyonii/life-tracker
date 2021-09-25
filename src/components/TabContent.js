import Tab from 'react-bootstrap/Tab';

const TabContent = () => (
  <Tab.Content>
    <Tab.Pane eventKey="add">Measurement Pane</Tab.Pane>
    <Tab.Pane eventKey="detail">Detail Pane</Tab.Pane>
    <Tab.Pane eventKey="progress">Progress Pane</Tab.Pane>
    <Tab.Pane eventKey="more">More Pane</Tab.Pane>
  </Tab.Content>
);

export default TabContent;
