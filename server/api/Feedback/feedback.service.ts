/**
 * Data Model Interfaces
 */

import faker from 'faker';
import { Feedback } from './feedback.interface';

/**
 * In-Memory Store
 */

// TODO replace with db

const generateFeedback = (): Feedback[] => {
  // eslint-disable-next-line prefer-const
  let generatedFeedback: Feedback[] = [];

  for (let i = 0; i < 50; i++) {
    generatedFeedback[i] = {
      id: i,
      content: faker.lorem.paragraph(),
    };
  }

  return generatedFeedback;
};

// TODO
// eslint-disable-next-line prefer-const
let feedback: Feedback[] = generateFeedback();

/**
 * Service Methods
 */

export const findAll = async (): Promise<Feedback[]> => {
  return feedback;
};

export const find = async (id: number): Promise<Feedback> => {
  const record: Feedback = feedback[id];

  if (record) {
    return record;
  }

  throw new Error('No record found');
};

export const create = async (newFeedback: Feedback): Promise<void> => {
  const id = new Date().valueOf();
  feedback[id] = {
    ...newFeedback,
    id,
  };
};

export const update = async (updatedFeedback: Feedback): Promise<void> => {
  if (updatedFeedback.id && feedback[updatedFeedback.id]) {
    feedback[updatedFeedback.id] = updatedFeedback;
    return;
  }

  throw new Error('No record found to update');
};

export const remove = async (id: number): Promise<void> => {
  const record: Feedback = feedback[id];

  if (record) {
    delete feedback[id];
    return;
  }

  throw new Error('No record found to delete');
};
