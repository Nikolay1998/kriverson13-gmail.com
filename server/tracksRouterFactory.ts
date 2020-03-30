import * as express from 'express';
import { Router } from 'express';

export const tracksRouterFactory = (): Router => {
  const router = express.Router();

  router.get('/all', (req, res) => {
    res.status(200).json([
      {
        name: 'Name 1',
        author: 'Author 1'
      },
      {
        name: 'Name 2',
        author: 'Author 2'
      }
    ]);
  });

  return router;
};
