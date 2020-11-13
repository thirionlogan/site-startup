import express from 'express';
import rateLimit from 'express-rate-limit'; // Limits allowed calls for x amount of ms
import slowDown from 'express-slow-down';
import { itemsRouter } from './Items/items.router';
import { feedbackRouter } from './Feedback/feedback.router';

export const router = express.Router(); // Slows each following request if spammed
// const axios = require('axios'); // Use axios to make http requests
// const example = require('./example.js'); ==> load specifc api file

const limiter = rateLimit({
  windowMs: 30 * 1000,
  max: 10,
});

const speedLimiter = slowDown({
  windowMs: 30 * 1000,
  delayAfter: 1,
  delayMs: 500,
});

router.get(
  '/',
  limiter,
  speedLimiter,
  (req: any, res: { json: (arg0: { message: string }) => void }) => {
    // TODO Weird Types
    res.json({
      message: 'API - 👋🌎🌍🌏',
    });
  }
);

router.use('/items', itemsRouter);
router.use('/feedback', feedbackRouter);
// router.use('/example-path', example); ==> to be routed to: api/chosen_path for example
