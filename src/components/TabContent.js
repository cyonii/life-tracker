import Tab from 'react-bootstrap/Tab';
import AddRecord from './panes/AddRecord';
import Records from './panes/Records';
import ProgressReport from './panes/ProgressReport';
import More from './panes/More';

const TabContent = () => {
  const pane = (eventKey, title, component = null) => (
    <Tab.Pane eventKey={eventKey}>
      <h3 className="h4 bg-primary text-center text-white py-2">{title}</h3>
      {component}
    </Tab.Pane>
  );

  return (
    <Tab.Content>
      {pane('add-record', 'Add record', <AddRecord />)}
      {pane('records', 'Track.it', <Records />)}
      {pane('progress-report', 'Progress report', <ProgressReport />)}
      {pane('more', 'More', <More />)}
    </Tab.Content>
  );
};

export default TabContent;
