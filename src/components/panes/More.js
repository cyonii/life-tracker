import { ListGroup, Button } from 'react-bootstrap';

const More = () => {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Button variant="light" disabled className="w-100 rounded-0" onClick={handleLogout}>Profile</Button>
          <Button variant="danger" className="w-100 rounded-0" onClick={handleLogout}>Logout</Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default More;
