import Tab from 'react-bootstrap/Tab';

const TabContent = () => {
  const pane = (eventKey, text) => (
    <Tab.Pane eventKey={eventKey}>
      <h3 className="h4 bg-primary text-center text-white py-2">{text}</h3>
    </Tab.Pane>
  );

  return (
    <Tab.Content>
      {pane('add', 'Add measurement')}
      {pane('detail', 'Track.it')}
      {pane('progress', 'Progress report')}
      {pane('more', 'More')}
    </Tab.Content>
  );
};

export default TabContent;
