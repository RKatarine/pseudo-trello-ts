const router = require('express').Router();
const mocks = require('./mock');

const reply = (res, body, timeout = 1000, status = 200) =>
  setTimeout(() => {
    res.status(status).json(body)
  }, timeout);

router.get('/sections', function(req, res, next) {
  reply(res, mocks.sections)
});

module.exports = router;