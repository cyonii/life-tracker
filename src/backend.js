import axios from 'axios';

// Authentic user
const BASE_URL = `${process.env.REACT_APP_API_HOST}/api/v1`;
const ACTIVITY_PATH = '/activities';
const RECORD_PATH = '/records';
const authToken = localStorage.getItem('authToken');

const registerUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/users`, { user });
  return response;
};

const authenticateUser = async (user) => {
  const response = await axios.post(`${BASE_URL}/auth`, { ...user });
  return response;
};

const getActivity = async (id) => {
  const response = await axios.get(`${BASE_URL}${ACTIVITY_PATH}/${id}`,
    { headers: { Authorization: `Bearer ${authToken}` } });
  return response;
};

const getActivities = async () => {
  const response = await axios.get(`${BASE_URL}${ACTIVITY_PATH}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return response;
};

const createRecord = async (data) => {
  const response = await axios.post(
    `${BASE_URL}${RECORD_PATH}`,
    data,
    { headers: { Authorization: `Bearer ${authToken}` } },
  );
  return response;
};

const getRecords = async () => {
  const response = await axios.get(`${BASE_URL}/${RECORD_PATH}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return response;
};

const getRecord = async (id) => {
  const response = await axios.get(`${BASE_URL}/${RECORD_PATH}/${id}`, {
    headers: { Authorization: `Bearer ${authToken}` },
  });
  return response;
};

export {
  registerUser,
  authenticateUser,
  getActivity,
  getActivities,
  createRecord,
  getRecords,
  getRecord,
};
