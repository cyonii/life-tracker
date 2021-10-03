import { useEffect, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import RecordItem from '../RecordItem';
import { getRecords } from '../../backend';

const Records = () => {
  const [records, setRecords] = useState([]);

  useEffect(async () => {
    await getRecords()
      .then((res) => setRecords(res.data.data))
      .catch((err) => err);
  }, []);

  return (
    <div className="container">
      <ListGroup variant="flush" className="p-0">
        {records.map((record) => <RecordItem key={record.id} record={record} />)}
      </ListGroup>
    </div>
  );
};

export default Records;
