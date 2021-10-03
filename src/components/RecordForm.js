import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  Form, Row, Col, Button,
} from 'react-bootstrap';
import { createRecord } from '../backend';

const RecordForm = (props) => {
  const { activity } = props;
  const [id, name] = activity;
  const options = [];

  for (let i = 0; i <= 10; i += 1) {
    options.push(<option value={i} key={i}>{i}</option>);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = {
      duration: form.duration.value,
      satisfaction: form.satisfaction.value,
      activity_id: id,
      date: new Date().toISOString().slice(0, 10),
    };

    toast.promise(createRecord(data), {
      pending: 'Creating record...',
      success: 'Record created!',
      error: {
        render: ({ data }) => {
          const errors = data.response.data;
          return `${Object.keys(errors)[0]}: ${Object.values(errors)[0]}`;
        },
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="bg-light py-2 mb-2 gx-3" key={name.toLowerCase()}>
        <h6 className="lh-1">{name}</h6>

        <Form.Group controlId={`${name.toLowerCase()}-duration`} as={Col} xs={6}>
          <Form.Label className="text-muted lh-0 mb-0">Duration</Form.Label>
          <Form.Control type="number" name="duration" placeholder="duation" max={1440} required />
        </Form.Group>

        <Form.Group controlId={`${name.toLowerCase()}-satisfaction`} as={Col} xs={6}>
          <Form.Label className="text-muted mb-0">Satisfaction</Form.Label>
          <Form.Select name="satisfaction">{options}</Form.Select>
        </Form.Group>

        <Col xs={12} className="d-flex mt-2">
          <Button type="submit" variant="primary" className="btn-sm lh-1 ms-auto">Submit</Button>
        </Col>
      </Row>
    </Form>
  );
};

RecordForm.propTypes = {
  activity: PropTypes.instanceOf(Object).isRequired,
};

export default RecordForm;
