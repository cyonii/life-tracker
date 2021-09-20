import axios from 'axios';

// Authentic user
const BASE_URL = 'http://localhost:3000/api/v1/';
const ACTIVITY_PATH = 'activities/';
const RECORD_PATH = 'records/';

const authenticateUser = async (credentials) => {
  const response = await axios.post(`${BASE_URL}auth/`, credentials);
  return response;
};

const getActivities = async () => {
  const response = await axios.get(`${BASE_URL}${ACTIVITY_PATH}`);
  return response;
};

const getActivityRecords = async (activityId) => {
  const response = await axios.get(`${BASE_URL}${ACTIVITY_PATH}${activityId}/${RECORD_PATH}`);
  return response;
};

const getSingleActivityRecord = async (activityId, recordId) => {
  const response = await axios.get(`${BASE_URL}${ACTIVITY_PATH}${activityId}/${RECORD_PATH}${recordId}`);
  return response;
};

export {
  authenticateUser,
  getActivities,
  getActivityRecords,
  getSingleActivityRecord,
};
