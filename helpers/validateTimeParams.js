const validateTimeParams = (req, res, next) => {
  const { startTime, endTime } = req.query;

  if (startTime && isNaN(startTime)) {
    return res
      .status(400)
      .json({ error: 'Invalid startTime. It must be a number.' });
  }

  if (endTime && isNaN(endTime)) {
    return res
      .status(400)
      .json({ error: 'Invalid endTime. It must be a number.' });
  }

  if (startTime && endTime && parseFloat(startTime) > parseFloat(endTime)) {
    return res
      .status(400)
      .json({ error: 'startTime must be less than or equal to endTime.' });
  }

  next();
};

export default validateTimeParams;
