import express from 'express';

const router = express.Router();

router.post('/search', (req, res) => {
  
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

export default router;
