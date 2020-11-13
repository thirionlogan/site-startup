import axios from 'axios';
import { createFeedbackClient, getFeedbackClient } from './Client';
import { Feedback } from '../../server/api/Feedback/feedback.interface';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Client', () => {
  const feedback: Feedback = {
    content: 'The app is great!',
  };

  describe('createFeedbackClient()', () => {
    it('should create feedback', async () => {
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve(feedback));
      await expect(createFeedbackClient(feedback)).resolves.toEqual({});
    });
  });

  describe('getFeedbackClient()', () => {
    it('should return an array of date strings between the two Dates passed in', async () => {
      mockedAxios.get.mockImplementationOnce(() => Promise.resolve([feedback]));
      await expect(getFeedbackClient()).resolves.toEqual({});
    });
  });
});
