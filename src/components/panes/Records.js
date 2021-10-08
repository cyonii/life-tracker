import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import RecordItem from '../RecordItem';
import { getRecords } from '../../backend';
import { addRecord } from '../../redux/actions';

const Records = () => {
  const records = useSelector((state) => state.records);
  const dispatch = useDispatch();

  useEffect(async () => {
    await getRecords()
      .then((res) => { dispatch(addRecord(res.data.data)); })
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
