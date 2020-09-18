module.exports = {
  responseCallback(err, dataSet) {
    if (err) {
      return jso;
    }
    return res.status(200).send(dataSet);
  },
};
