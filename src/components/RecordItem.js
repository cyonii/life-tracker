import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, Stack, Badge } from 'react-bootstrap';
import { getActivity } from '../backend';

const RecordItem = (props) => {
  const { record } = props;
  const [activity, setActivity] = useState({ attributes: {} });

  useEffect(async () => {
    const activityId = record.relationships.activity.data.id;
    await getActivity(activityId)
      .then((res) => setActivity(res.data.data))
      .catch((err) => (err));
  }, []);

  return (
    <ListGroup.Item key={record.id}>
      {record.attributes.date}
      <br />
      <Badge variant="info" className="px-3 rounded-0">{activity.attributes.name}</Badge>
      <Stack direction="horizontal">
        <div>
          <span className="text-muted fw-light">Duration: </span>
          {`${record.attributes.duration} minutes`}
        </div>
        <div className="ms-auto">
          <span className="text-muted fw-light">Satisfaction: </span>
          {`${record.attributes.satisfaction}/10`}
        </div>
      </Stack>
    </ListGroup.Item>
  );
};

RecordItem.propTypes = {
  record: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecordItem;
