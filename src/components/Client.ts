import axios from 'axios';
import { Feedback } from '../../server/api/Feedback/feedback.interface';
import { Items } from '../../server/api/Items/items.interface';

export const createFeedbackClient = (params: Feedback): Promise<void> => {
  return axios
    .post('/api/feedback', params)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getFeedbackClient = (): Promise<Feedback[]> => {
  return axios
    .get('/api/feedback')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getItems = (): Promise<Items> => {
  return axios
    .get('/api/items')
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
