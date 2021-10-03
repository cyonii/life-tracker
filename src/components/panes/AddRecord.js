import { useEffect, useState } from 'react';
import RecordForm from '../RecordForm';
import { getActivities } from '../../backend';

const AddRecord = () => {
  const [activities, setActivities] = useState([]);

  useEffect(async () => {
    await getActivities()
      .then(({ data }) => {
        const mappedActivities = data.data.map((activity) => (
          [activity.id, activity.attributes.name]
        ));
        setActivities(mappedActivities);
      })
      .catch((error) => (error));
  }, []);

  return (
    <div className="container">
      {activities.map((activity) => (<RecordForm key={activity[0]} activity={activity} />))}
    </div>
  );
};

export default AddRecord;
