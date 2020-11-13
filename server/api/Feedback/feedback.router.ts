/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import * as FeedbackService from './feedback.service';
import { Feedback } from './feedback.interface';
/**
 * Router Definition
 */

export const feedbackRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items/

feedbackRouter.get('/', async (req: Request, res: Response) => {
  try {
    const feedback: Feedback[] = await FeedbackService.findAll();

    res.status(200).send(feedback);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// GET items/:id

feedbackRouter.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);

  try {
    const feedback: Feedback = await FeedbackService.find(id);

    res.status(200).send(feedback);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// POST items/

feedbackRouter.post('/', async (req: Request, res: Response) => {
  try {
    const { item: feedback } = req.body;

    await FeedbackService.create(feedback);

    res.sendStatus(201);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

// PUT items/

feedbackRouter.put('/', async (req: Request, res: Response) => {
  try {
    const { item: feedback } = req.body;

    await FeedbackService.update(feedback);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// DELETE items/:id

feedbackRouter.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id: number = parseInt(req.params.id, 10);
    await FeedbackService.remove(id);

    res.sendStatus(200);
  } catch (e) {
    res.status(500).send(e.message);
  }
});
