module.exports = {
  responseCallback(err, dataSet, res) {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(200).send(dataSet);
  },
};
